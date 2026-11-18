import { Server, Socket } from "socket.io";
import { room } from "../server";
import { toPublicRoom } from "../lobby/toPublicRoom";

interface TurnManagerModel {
  roomId: string;
  playerId: string;
}

export const turnManager = (io: Server, socket: Socket) => {
  socket.on("end-turn", (data: TurnManagerModel, callback) => {
    const roomx = room.get(data.roomId);
    const targetPlayer = roomx?.players.find((p) => p.id === data.playerId);

    if (!roomx) {
      return callback({
        message: "The room doesn't exist.",
        success: false,
      });
    }

    if (!targetPlayer) {
      return callback({
        message: "The player doesn't exist",
        success: false,
      });
    }

    if (roomx.players[roomx.currentPlayerIndex].id !== targetPlayer.id) {
      return callback({
        message: "Is not your turn.",
        success: false,
      });
    }

    if (targetPlayer.hand.length > 7) {
      return callback({
        message: "You must discard cards until you have 7 cards.",
        success: false,
      });
    }

    roomx.currentPlayerIndex = (roomx.currentPlayerIndex + 1) % roomx.players.length;

    io.to(data.roomId).emit("room-updated", {
      id: data.roomId,
      room: toPublicRoom(roomx),
      success: true,
    });
  });
};
