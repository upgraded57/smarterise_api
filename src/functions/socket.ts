import { Server, Socket } from "socket.io";
import {
  IncreasePictureView,
  RegisterViewedPage,
  setUserLastView,
} from "./queries";

let activeUsers: {
  email: string;
  socketId: string;
  sessionId: string;
  username?: string;
  signInTime: number;
}[] = [];

interface UserEventData {
  email: string;
  sessionId: string;
  username?: string;
  userId?: string;
  pictureId?: string;
  page?: string;
}

const visitedHomeSessions = new Set<string>();
const visiteAboutSessions = new Set<string>();
const visitedPicturePage = new Set<string>();

export function registerSocketHandlers(io: Server, socket: Socket) {
  const handleUserSignin = async (data: UserEventData) => {
    // Check if user is already online
    const existingUser = activeUsers.findIndex(
      (user) => user.sessionId === data.sessionId
    );

    if (existingUser !== -1) {
      activeUsers[existingUser].socketId = socket.id;
    } else {
      await setUserLastView(data.email);
      const onlineUser = {
        email: data.email,
        username: data.username,
        sessionId: data.sessionId,
        socketId: socket.id,
        signInTime: Date.now(),
      };
      activeUsers.push(onlineUser);
      io.emit("userOnline", onlineUser);
    }

    (socket as any).sessionId = data.sessionId;
  };

  const handleUserSignup = (data: UserEventData) => {
    const onlineUser = {
      email: data.email,
      username: data.username,
      sessionId: data.sessionId,
      socketId: socket.id,
      signInTime: Date.now(),
    };
    activeUsers.push(onlineUser);
    io.emit("newUserOnline", onlineUser);

    (socket as any).sessionId = data.sessionId;
  };

  const handleUserSignout = async (data: string) => {
    const signedOutUSer = activeUsers.find((user) => user.sessionId === data);

    // set user last seen to current timestamp
    if (signedOutUSer) {
      await setUserLastView(signedOutUSer.email);
      // Remove the user from active users
      activeUsers = activeUsers.filter(
        (user) => user.sessionId !== signedOutUSer?.sessionId
      );

      io.emit("userOffline", signedOutUSer);
    }
  };

  const handlePictureView = async (data: UserEventData) => {
    // Check if user has visited current picture in current session
    const session = data.sessionId + "," + data.pictureId;
    if (visitedPicturePage.has(session)) return;

    // Set picture page to viewed in current session
    visitedPicturePage.add(session);

    // Update the picture view count
    const updatedPicture = await IncreasePictureView(
      data.sessionId ? data.sessionId : "",
      data.userId ? data.userId : "",
      data.pictureId ? data.pictureId : ""
    );
    if (updatedPicture) {
      socket.broadcast.emit("pictureCountUpdate", updatedPicture);
    }

    // Register picture page as viewed
    if (data.userId) {
      const isRegisteredPageView = await RegisterViewedPage(
        data.pictureId
          ? `/pictures/${data.pictureId}`
          : data.page
          ? data.page
          : "",
        data.userId,
        data.sessionId,
        data.pictureId
      );

      if (isRegisteredPageView) {
        io.emit("visitPicturePage", null);
      }
    }
  };

  const handleVisitHomepage = async (data: UserEventData) => {
    // Check if user has visited homepage in current session
    if (visitedHomeSessions.has(data.sessionId)) return;

    // Set home page to visited in sesison
    visitedHomeSessions.add(data.sessionId);
    // Register home page as viewed
    if (data.userId) {
      const isRegisteredPageView = await RegisterViewedPage(
        "/home",
        data.userId,
        data.sessionId,
        undefined
      );

      if (isRegisteredPageView) {
        io.emit("visitHomepage", null);
      }
    }
  };

  const handleVisitAboutPage = async (data: UserEventData) => {
    // Check if user has visited homepage in current session
    if (visiteAboutSessions.has(data.sessionId)) return;

    // Set about page to visited in sesison
    visiteAboutSessions.add(data.sessionId);

    // Register home page as viewed
    if (data.userId) {
      const isRegisteredPageView = await RegisterViewedPage(
        "/about",
        data.userId,
        data.sessionId,
        undefined
      );

      if (isRegisteredPageView) {
        io.emit("visitAboutPage", null);
      }
    }
  };

  const handleUserDisconnect = () => {
    const sessionId = (socket as any).sessionId;
    if (sessionId) {
      activeUsers.find((user) => user.sessionId === sessionId);
      activeUsers = activeUsers.filter((user) => user.sessionId !== sessionId);
    }
  };

  socket.on("userSignin", handleUserSignin);
  socket.on("userSignup", handleUserSignup);
  socket.on("userSignout", handleUserSignout);
  socket.on("pictureView", handlePictureView);
  socket.on("visitHomepage", handleVisitHomepage);
  socket.on("visitAboutPage", handleVisitAboutPage);
  socket.on("userDisconnected", handleUserDisconnect);
}

export const getActiveUsers = () => {
  return activeUsers;
};
