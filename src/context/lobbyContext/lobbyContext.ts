import { createContext } from "react";
import type { LobbyResponseModel } from "../../models/lobbyModel";

interface LobbyContextModel {
  lobby: LobbyResponseModel;
  createLobby: (name: string) => Promise<LobbyResponseModel>;
  joinLobby: (id: string, name: string) => Promise<LobbyResponseModel>;
}

const LobbyContext = createContext<LobbyContextModel | null>(null);

export default LobbyContext;
