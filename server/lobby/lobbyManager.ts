import { Server, Socket } from "socket.io";
import { Player } from "../types/playerModel";
import { room } from "../server";
import { v4 as uuidv4 } from "uuid";
import { toPublicRoom } from "./toPublicRoom";
import { PrivateRoom } from "../types/lobbyModel";

export const lobbyManager = (io: Server, socket: Socket) => {
  socket.on("create-lobby", (username: string, callBack) => {
    const roomID = uuidv4().slice(0, 6).toUpperCase();

    const hostPlayer: Player = {
      id: socket.id,
      name: username,
      hand: [],
      bank: [],
      properties: [],
    };

    const newRoom: PrivateRoom = {
      hostId: socket.id,
      name: username,
      players: [hostPlayer],
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
      room: toPublicRoom(newRoom),
      success: true,
    });
  });

  socket.on("join-lobby", (data: { id: string; name: string }, callBack) => {
    const roomID = data.id.toUpperCase();
    const targetRoom = room.get(roomID);

    if (!targetRoom) {
      return callBack({ success: false, error: "Room not found" });
    }

    if (targetRoom.status !== "waiting") {
      return callBack({ success: false, error: "Game has already started" });
    }

    if (targetRoom.players.length >= targetRoom.maxPlayers) {
      return callBack({ success: false, error: "Room is full" });
    }

    if (targetRoom.players.some((p) => p.id === socket.id)) {
      return callBack({ success: false, error: "You are already in this room" });
    }

    const newPlayer: Player = {
      id: socket.id,
      name: data.name,
      hand: [],
      bank: [],
      properties: [],
    };

    targetRoom.players.push(newPlayer);
    socket.join(roomID);

    const response = {
      id: roomID,
      room: toPublicRoom(targetRoom),
      success: true,
    };

    io.to(roomID).emit("room-updated", response);
    socket.to(roomID).emit("notification", `${data.name} joined the room!`);

    callBack(response);
  });

  socket.on("disconnect", (reason) => {
    console.log(`${socket.id} disconnected: ${reason}`);
    // Player removal logic here
  });
};
