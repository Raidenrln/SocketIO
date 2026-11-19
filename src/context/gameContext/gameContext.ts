import { createContext } from "react";
import type { Card } from "../../models/cardModel";

interface GameContextType {
  hand: Card[];
  handleDrawCard: (id: string, roomId: string) => void;
  handlePlacingCard: (cardId: string, playerId: string, toWhere: string) => void;
  handlePlacingExistProperty: (cardExistId: string, cardId: string, toWhere: string) => void;
}

const GameContext = createContext<GameContextType | null>(null);

export default GameContext;
