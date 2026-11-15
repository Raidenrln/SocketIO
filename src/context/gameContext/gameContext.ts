import { createContext } from "react";
import type { Card } from "../../models/cardModel";

interface GameContextType {
  hand: Card[];
  setHand: React.Dispatch<React.SetStateAction<Card[]>>;
  handleDrawCard: (id: string, roomId: string) => void;
}

const GameContext = createContext<GameContextType | null>(null);

export default GameContext;
