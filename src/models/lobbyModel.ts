import type { Card } from "./cardModel";
import type { PublicPlayer } from "./playerModel";

export type RoomModel = {
  name: string;
  hostId: string;
  players: PublicPlayer[];
  maxPlayers: number;
  status: "waiting" | "playing";
  deck: Card[];
  discardPile: Card[];
  currentPlayerIndex: number;
  turn: number;
};

export type LobbyResponseModel = {
  id: string;
  room: RoomModel;
  success: boolean;
};
