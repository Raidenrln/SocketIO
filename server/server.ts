import { createServer } from "node:http";
import { Server } from "socket.io";
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  socket.on("send-message", (m) => {
    console.log(m);
    io.emit("receive-msg", { id: socket.id, m });
  });
  socket.on("create-room", (roomName, callback) => {
    const roomId = new Date().getDate().toString().slice(0, 6);
    socket.join(roomId);

    callback({ success: true, roomId: roomId, name: roomName });
  });
});

httpServer.listen(3001, () => {
  console.log("Socket.IO server running on port 3001");
});
