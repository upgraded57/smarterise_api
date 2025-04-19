import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import rootRoute from "./routes/root";
import { errorHandler } from "./functions/errorHandler";
import { Server } from "socket.io";
import { createServer } from "http";
import { getActiveUsers, registerSocketHandlers } from "./functions/socket";
require("dotenv").config();

const app = express();

// Connet socket server
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://smarterise-client.vercel.app",
      "https://piehost.com",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

let broadcastInterval: NodeJS.Timeout | null = null;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://smarterise-client.vercel.app",
      "https://piehost.com",
    ],
  })
);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API working correctly");
});

app.use("/api", rootRoute);
app.use(express.json());
const port = process.env.PORT;

// Catch-All Route for Unhandled Endpoints
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: false,
    message: "Endpoint not found",
  });
});

// Error handler
app.use(errorHandler);

const activeUsers = getActiveUsers();

// Register socket event handler
io.on("connection", (socket) => {
  registerSocketHandlers(io, socket);

  // Broadcast active users count
  if (!broadcastInterval) {
    broadcastInterval = setInterval(() => {
      io.emit("activeUsers", activeUsers);
    }, 3000);
  }
});

server.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
export { io };
