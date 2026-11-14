import { createContext } from "react";
import type { Card } from "../../models/cardModel";

interface GameContextType {
  hand: Card[];
  setHand: React.Dispatch<React.SetStateAction<Card[]>>;
}

const GameContext = createContext<GameContextType | null>(null);

export default GameContext;
