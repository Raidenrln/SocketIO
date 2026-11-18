import { createContext } from "react";
import type { Card } from "../../models/cardModel";

export interface SelectedCardContextModel {
  selectedCard: Card | null;
  selectedPropertiesCard: Card | null;
  handleSelectedPropertiesCard: (card: Card | null) => void;
  handleSelectedCard: (card: Card | null) => void;
}

export const SelectedCardContext = createContext<SelectedCardContextModel | null>(null);
