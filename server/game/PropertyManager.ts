import { Server, Socket } from "socket.io";
import { room } from "../server";

type ExistPropertyModel = {
  roomId: string;
  playerId: string;
  cardExistId: string;
  cardId: string;
  toWhere: string;
};

export const PropertyManager = (io: Server, socket: Socket) => {
  socket.on("place-exist-property", (data: ExistPropertyModel, callBack) => {
    const targetRoom = room.get(data.roomId);
    const targetPlayer = targetRoom?.players.find((p) => p.id === data.playerId);

    if (!targetRoom) {
      console.log(targetRoom);

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

    const targetPlayerHandCard = targetPlayer.hand.find((p) => p.id === data.cardId);
    const targetPlayerProperties = targetPlayer.properties.findIndex((p) =>
      p.some((c) => c.color === targetPlayerHandCard?.color),
    );
    console.log(targetPlayerProperties);
  });
};
