import { createServer } from "node:http";
import { Server } from "socket.io";
// import { Cards, cards } from "./cards";
import { gameManager } from "./game/gameManager";
import { PrivateRoom } from "./types/lobbyModel";
import { lobbyManager } from "./lobby/lobbyManager";
const httpServer = createServer();

export const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173", "http://192.168.0.101:5173"],
  },
  pingInterval: 25000,
  pingTimeout: 20000,
});

export const room = new Map<string, PrivateRoom>();

io.on("connection", (socket) => {
  gameManager(io, socket);
  lobbyManager(io, socket);
  // socket.on("start-game", (id, callBack) => {});
});

httpServer.listen(3001, () => {
  console.log("Socket.IO server running on port 3001");
});
