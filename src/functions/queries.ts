import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

export const IncreasePictureView = async (
  sessionId: string,
  userId: string,
  pictureId: string
) => {
  let picture;
  try {
    // Check if view with same session already exists
    const pictureViewed = await prisma.pictureViews.findFirst({
      where: {
        sessionId,
        pictureId,
      },
    });

    if (pictureViewed) {
      picture = null;
      return picture;
    }

    const createdPicture = await prisma.pictureViews.create({
      data: {
        sessionId,
        userId,
        picture: {
          connect: {
            id: pictureId,
          },
        },
      },
      include: {
        picture: true,
      },
    });

    const pictureViewer = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
        name: true,
      },
    });

    picture = {
      id: createdPicture.id,
      sessionId: createdPicture.sessionId,
      userId: createdPicture.userId,
      pictureId: createdPicture.pictureId,
      userEmail: pictureViewer ? pictureViewer.email : "",
      pictureAuthor: createdPicture.picture.author,
      pictureName: createdPicture.picture.name,
      username: pictureViewer?.name,
    };

    return picture;
  } catch (error) {
    console.log("Unable to increase picture view count", error);
    return false;
  }
};

export const setUserLastView = async (email?: string) => {
  if (!email) {
    return false;
  }
  try {
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        lastSeen: new Date(),
      },
    });

    if (!user) {
      return false;
    }

    return true;
  } catch (error) {
    console.log("Unable to set user last view", error);
  }
};

export const RegisterViewedPage = async (
  page: string,
  userId: string,
  sessionId: string,
  pictureId?: string
) => {
  try {
    await prisma.pageViews.create({
      data: {
        page,
        userId,
        sessionId,
        pictureId: pictureId || undefined,
      },
    });

    return true;
  } catch (error) {
    console.log("Unable to register page as viewed", error);
    return false;
  }
};
