import type { Server, Socket } from "socket.io";
import { room } from "../server";
import { shuffleDeck } from "../utils/shuffler";
import { toPublicRoom } from "../lobby/toPublicRoom";

const INITIAL_HAND_SIZE = 5;

export const gameManager = (io: Server, socket: Socket) => {
  socket.on("start-game", (id: string, callBack) => {
    const targetRoom = room.get(id);

    if (!targetRoom) {
      return callBack({ success: false, message: "Room not found!" });
    }

    if (targetRoom.hostId !== socket.id) {
      return callBack({ success: false, message: "Only the host can start the game!" });
    }

    if (targetRoom.status === "playing") {
      return callBack({ success: false, message: "Game already started!" });
    }

    if (targetRoom.players.length < 2) {
      return callBack({ success: false, message: "Need at least 2 players!" });
    }

    targetRoom.deck = shuffleDeck();

    if (targetRoom.deck.length < targetRoom.players.length * INITIAL_HAND_SIZE) {
      return callBack({ success: false, message: "Not enough cards!" });
    }

    for (const player of targetRoom.players) {
      player.hand = targetRoom.deck.splice(0, INITIAL_HAND_SIZE);
      io.to(player.id).emit("your-hand", player.hand);
    }

    targetRoom.status = "playing";
    targetRoom.currentPlayerIndex = 0;
    targetRoom.turn = 1;

    const publicRoom = toPublicRoom(targetRoom);

    io.to(id).emit("game-started", {
      id,
      room: publicRoom,
      success: true,
    });

    callBack({
      success: true,
      message: "Game started!",
      room: publicRoom,
    });
  });
};
