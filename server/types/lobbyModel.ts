import { Card } from "./cardModel";
import { Player, PublicPlayer } from "./playerModel";

export interface PrivateRoom {
  hostId: string;
  name: string;
  players: Player[];
  maxPlayers: number;
  status: "waiting" | "playing" | "finished";
  deck: Card[];
  discardPile: Card[];
  currentPlayerIndex: number;
  turn: number;
}

export interface PublicRoom {
  hostId: string;
  name: string;
  players: PublicPlayer[];
  maxPlayers: number;
  status: "waiting" | "playing" | "finished";
  deck: number;
  discardPile: Card[];
  currentPlayerIndex: number;
  turn: number;
}
