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

    if (!targetPlayer) {
      return callBack({
        success: false,
        message: "This player doesn't exist",
      });
    }

    if (targetRoom.players[targetRoom.currentPlayerIndex].id !== targetPlayer.id) {
      return callBack({
        success: false,
        message: `Its ${targetRoom.players[targetRoom.currentPlayerIndex].name} turn.`,
      });
    }

    if (targetPlayer?.hand.length >= 7) {
      return callBack({
        success: false,
        message: "Only up to 7 card on hands is allowed",
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

  socket.on("place-card", ({ roomId, cardId, playerId, toWhere }, callBack) => {
    const targetRoom = room.get(roomId);

    if (!targetRoom) {
      return callBack({
        success: false,
        message: "Room does not exist",
      });
    }

    const targetPlayer = targetRoom?.players.find((p) => p.id === playerId);

    if (!targetPlayer) {
      return callBack({
        success: false,
        message: "Player does not exist",
      });
    }

    if (targetRoom.players[targetRoom.currentPlayerIndex].id !== targetPlayer.id) {
      return callBack({
        success: false,
        message: `Its ${targetRoom.players[targetRoom.currentPlayerIndex].name} turn.`,
      });
    }

    const cardIndex = targetPlayer.hand.findIndex((c) => c.id === cardId);

    if (cardIndex === -1) {
      return callBack({
        success: false,
        message: "This card does not exist",
      });
    }

    const targetPlayerCard = targetPlayer.hand[cardIndex];

    if (toWhere === "property") {
      if (targetPlayerCard.type !== "property") {
        return callBack({
          success: false,
          message: "You can't put that card here.",
        });
      }

      targetPlayer.hand.splice(cardIndex, 1);
      targetPlayer.properties.push([targetPlayerCard]);
    } else if (toWhere === "bank") {
      if (targetPlayerCard.value === 0) {
        return callBack({
          success: false,
          message: "You can't put that card here.",
        });
      }

      targetPlayer.hand.splice(cardIndex, 1);
      targetPlayer.bank.push(targetPlayerCard);
    }

    io.to(targetPlayer.id).emit("your-hand", targetPlayer.hand);
    io.to(roomId).emit("room-updated", {
      id: roomId,
      room: toPublicRoom(targetRoom),
      success: true,
    });

    callBack({ success: true });
  });
};
