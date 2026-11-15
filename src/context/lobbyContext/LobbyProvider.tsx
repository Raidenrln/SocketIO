import { useEffect, useState } from "react";
import LobbyContext from "./lobbyContext";
import { socket } from "../../socket";
import type { LobbyResponseModel } from "../../models/lobbyModel";

export const LobbyProvider = ({ children }: { children: React.ReactNode }) => {
  const [lobby, setLobby] = useState<LobbyResponseModel>({
    id: "",
    room: {
      name: "",
      hostId: "",
      players: [],
      maxPlayers: 5,
      status: "waiting",
      deck: 0,
      discardPile: [],
      currentPlayerIndex: 0,
      turn: 0,
    },
    success: false,
  });

  const createLobby = (name: string): Promise<LobbyResponseModel> => {
    return new Promise((resolve, reject) => {
      socket.emit("create-lobby", name, (response: LobbyResponseModel) => {
        if (!response?.success) {
          reject(new Error("Failed to create lobby"));
          return;
        }

        setLobby(response);
        console.log(lobby);
        resolve(response);
      });
    });
  };

  const joinLobby = (id: string, name: string): Promise<LobbyResponseModel> => {
    return new Promise((resolve, reject) => {
      const data = {
        id,
        name,
      };
      socket.emit("join-lobby", data, (response: LobbyResponseModel) => {
        if (!response.success) {
          console.log("error");

          reject(new Error("Failed to join lobby"));
          return;
        }

        setLobby(response);
        resolve(response);
        console.log(response);
      });
    });
  };

  useEffect(() => {
    const handleRoomUpdated = (payload: LobbyResponseModel) => {
      console.log("Room received:", payload);

      setLobby((prev) => ({
        ...prev,
        id: payload.id ?? prev.id,
        room: payload.room,
        success: payload.success,
      }));
    };

    socket.on("room-updated", handleRoomUpdated);
    socket.on("game-started", handleRoomUpdated);

    return () => {
      socket.off("room-updated", handleRoomUpdated);
      socket.off("game-started", handleRoomUpdated);
    };
  }, []);

  return (
    <LobbyContext.Provider value={{ lobby, createLobby, joinLobby }}>
      {children}
    </LobbyContext.Provider>
  );
};
