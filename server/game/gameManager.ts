import type { Server, Socket } from "socket.io";
import { room } from "../server";
import { shuffleDeck } from "../utils/shuffler";

const INITIAL_HAND_SIZE = 5;

export const gameManager = (io: Server, socket: Socket) => {
  socket.on("start-game", (id, callBack) => {
    const targetRoom = room.get(id);

    if (!targetRoom) {
      return callBack({ message: "Room not found!" });
    }

    if (targetRoom.hostId !== socket.id) {
      return callBack({ message: "Only the host can start the game!" });
    }

    if (targetRoom.status === "playing") {
      return callBack({ message: "Game already started!" });
    }

    if (targetRoom.players.length < 2) {
      return callBack({ message: "Need at least 2 players!" });
    }

    targetRoom.deck = shuffleDeck();

    if (targetRoom.deck.length < targetRoom.players.length * INITIAL_HAND_SIZE) {
      return callBack({ message: "Not enough cards!" });
    }

    for (const player of targetRoom.players) {
      player.hand = targetRoom.deck.splice(0, INITIAL_HAND_SIZE);
    }

    for (const player of targetRoom.players) {
      io.to(player.id).emit("your-hand", player.hand);
    }

    targetRoom.status = "playing";

    console.log("SERVER DECK:", targetRoom.deck.length);

    io.to(id).emit("game-started", {
      id,
      room: targetRoom,
      success: true,
    });

    callBack({ message: "Game started!" });
  });
};
