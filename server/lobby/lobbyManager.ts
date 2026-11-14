import { Server, Socket } from "socket.io";
import { Player } from "../types/playerModel";
import { Room } from "../types/lobbyModel";
import { room } from "../server";
import { v4 as uuidv4 } from "uuid";

export const lobbyManager = (io: Server, socket: Socket) => {
  socket.on("create-lobby", (username, callBack) => {
    const roomID = uuidv4().slice(0, 6).toUpperCase();

    const player: Player = {
      id: socket.id,
      name: username,
      hand: [],
      bank: [],
      properties: [],
    };

    const newRoom: Room = {
      hostId: socket.id,
      name: username,
      players: [player],
      maxPlayers: 5,
      status: "waiting",
      deck: [],
      discardPile: [],
      currentPlayerIndex: 0,
      turn: 0,
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

  socket.on("join-lobby", (data: { id: string; name: string }, callBack) => {
    const targetRoom = room.get(data.id);

    if (!targetRoom) {
      return callBack({ success: false, error: "Room not found" });
    }

    const newPlayer: Player = {
      id: socket.id,
      name: data.name,
      hand: [],
      bank: [],
      properties: [],
    };

    targetRoom.players.push(newPlayer);

    socket.join(data.id);

    const response = {
      id: data.id,
      room: targetRoom,
      success: true,
    };

    io.to(data.id).emit("room-updated", response);
    socket.to(data.id).emit("notification", `${data.name} joined the room!`);

    callBack(response);
  });
  console.log(room);
  socket.on("disconnect", (reason) => {
    console.log(`${socket.id} disconnected: ${reason}`);

    // Your player removal logic here
  });
};
