import { useContext } from "react";
import LobbyContext from "./lobbyContext";

export const useLobby = () => {
  const context = useContext(LobbyContext);

  if (!context) {
    throw new Error("useLobby must be used within UserProvider");
  }

  return context;
};
