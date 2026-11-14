import { Card } from "./cardModel";
import { Player } from "./playerModel";

export type Room = {
  name: string;
  hostId: string;
  players: Player[];
  maxPlayers: number;
  status: "waiting" | "playing";
  deck: Card[];
  discardPile: Card[];
  currentPlayerIndex: number;
  turn: number;
};
