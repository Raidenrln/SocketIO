import { createServer } from "node:http";
import { Server } from "socket.io";
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

type RoomModel = {
  [roomId: string]: string;
};

const rooms: RoomModel = {};

io.on("connection", (socket) => {
  socket.on("create-room", (roomName, callback) => {
    const roomId = new Date().getUTCMilliseconds().toString().slice(0, 6).padStart(3, "0");
    rooms[roomId] = roomName;
    socket.join(roomId);

    callback({ success: true, roomId: roomId, name: roomName });
  });
  socket.on("join-room", (roomId, callback) => {
    if (!rooms[roomId]) {
      callback({ success: false, error: "Room not found" });
      return;
    }

    socket.join(roomId);

    socket.to(roomId).emit("user-joined", socket.id);

    callback({ success: true, roomId, name: rooms[roomId] });
  });

  socket.on("send-message", (roomId, m) => {
    console.log(m);
    io.to(roomId).emit("receive-msg", { id: socket.id, m });
  });
});

httpServer.listen(3001, () => {
  console.log("Socket.IO server running on port 3001");
});
