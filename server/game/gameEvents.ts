import type { Server, Socket } from "socket.io";
export const gameEvents = (io: Server, socket: Socket) => {
  socket.on("place-card", (card, callBack) => {});
};
