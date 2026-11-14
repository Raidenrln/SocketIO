import { useEffect, useState } from "react";
import GameContext from "./gameContext";
import type { Card } from "../../models/cardModel";
import { socket } from "../../socket";

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [hand, setHand] = useState<Card[]>([]);

  useEffect(() => {
    const handleHand = (cards: Card[]) => {
      setHand(cards);
    };

    socket.on("your-hand", handleHand);

    return () => {
      socket.off("your-hand", handleHand);
    };
  }, []);

  return <GameContext.Provider value={{ hand, setHand }}>{children}</GameContext.Provider>;
};
