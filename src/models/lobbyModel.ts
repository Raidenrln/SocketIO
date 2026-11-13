import type { Player } from "./playerModel";

export type RoomModel = {
  name: string;
  players: Player[];
  maxPlayers: number;
  status: "waiting" | "playing";
};
