import { createContext } from "react";
import type { Card } from "../../models/cardModel";

export interface SelectedCardContextModel {
  selectedCard: Card | null;
  handleSelectedCard: (card: Card | null) => void;
}

export const SelectedCardContext = createContext<SelectedCardContextModel | null>(null);
