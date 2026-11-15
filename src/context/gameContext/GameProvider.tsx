import { useEffect, useState } from "react";
import GameContext from "./gameContext";
import type { Card } from "../../models/cardModel";
import { socket } from "../../socket";
import { useLobby } from "../lobbyContext/useLobby";
// import { useLobby } from "../lobbyContext/useLobby";

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [hand, setHand] = useState<Card[]>([]);
  const { lobby } = useLobby();

  // User draw card

  const handleDrawCard = (playerId: string, roomId: string) => {
    socket.emit(
      "draw-card",
      { playerId, roomId },
      (response: { success: boolean; message?: string }) => {
        if (!response.success) {
          throw new Error(response.message);
        }
      },
    );
  };

  const handlePlacingCard = (playerId: string, cardId: string) => {
    console.log("Player Card:", playerId, cardId);
    socket.emit(
      "place-card",
      {
        roomId: lobby.id,
        cardId,
        playerId,
      },
      (response: { success: boolean; message: string }) => {
        if (!response.success) {
          throw new Error(response.message);
        }
      },
    );
  };

  useEffect(() => {
    const handleHand = (cards: Card[]) => {
      setHand(cards);
      console.log("Updated hand:", cards);
    };

    socket.on("your-hand", handleHand);

    return () => {
      socket.off("your-hand", handleHand);
    };
  }, []);

  return (
    <GameContext.Provider value={{ hand, handleDrawCard, handlePlacingCard }}>
      {children}
    </GameContext.Provider>
  );
};
