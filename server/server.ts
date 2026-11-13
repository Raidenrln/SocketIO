import { createServer } from "node:http";
import { Server } from "socket.io";
// import { Cards, cards } from "./cards";
import { v4 as uuidv4 } from "uuid";
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

type Card = {
  id: string;
  value: string;
  type: string;
};

type Player = {
  id: string;
  name: string;
  card: Card[];
};

type Room = {
  name: string;
  players: Player[];
  maxPlayers: number;
  status: "waiting" | "playing";
};

const room = new Map<string, Room>();

io.on("connection", (socket) => {
  socket.on("create-lobby", (username, callBack) => {
    const roomID = uuidv4().slice(0, 6).toUpperCase();

    const player: Player = {
      id: socket.id,
      name: username,
      card: [],
    };

    const newRoom: Room = {
      name: username,
      players: [player],
      maxPlayers: 5,
      status: "waiting",
    };

    room.set(roomID, newRoom);

    socket.join(roomID);

    callBack({
      id: roomID,
      room: newRoom,
      success: true,
    });
    console.log(room);
  });

  socket.on("join-room", (data: { id: string; name: string }, callBack) => {
    const targetRoom = room.get(data.id);

    if (!targetRoom) {
      return callBack({ success: false, error: "Room not found" });
    }

    const newPlayer: Player = {
      id: socket.id,
      name: data.name,
      card: [],
    };

    targetRoom.players.push(newPlayer);

    socket.join(data.id);

    io.to(data.id).emit("room-updated", targetRoom);
    socket.to(data.id).emit("notification", `${data.name} joined the room!`);

    callBack({ success: true, room: targetRoom });
  });

  // socket.on("start-game", (id, callBack) => {});
});

httpServer.listen(3001, () => {
  console.log("Socket.IO server running on port 3001");
});
