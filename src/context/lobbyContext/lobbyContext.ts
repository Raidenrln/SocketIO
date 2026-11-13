import { createContext } from "react";
import type { RoomModel } from "../../models/lobbyModel";

interface LobbyContextModel {
  lobby: RoomModel[];
}
export const lobbyContext = createContext<LobbyContextModel | null>(null);
