import type { Server, Socket } from "socket.io";
import { room } from "../server";
import { toPublicRoom } from "../lobby/toPublicRoom";

type drawCardModel = {
  playerId: string;
  roomId: string;
};

export const cardManager = (io: Server, socket: Socket) => {
  socket.on("draw-card", (roomx: drawCardModel, callBack) => {
    const targetRoom = room.get(roomx.roomId);
    const targetPlayer = targetRoom?.players.find((p) => p.id === roomx.playerId);

    if (!targetRoom) {
      return callBack({
        success: false,
        message: "Room does not exist",
      });
    }

    for (let i = 0; i < 2; i++) {
      const card = targetRoom?.deck.pop();
      if (card) {
        targetPlayer?.hand.push(card);
      }
    }
    console.log(targetPlayer);

    io.to(targetPlayer!.id).emit("your-hand", targetPlayer!.hand);
    io.to(roomx.roomId).emit("room-updated", {
      id: roomx.roomId,
      room: toPublicRoom(targetRoom),
      success: true,
    });

    callBack({
      success: true,
    });
  });
};
