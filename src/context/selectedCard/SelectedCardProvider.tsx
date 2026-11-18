import { useState } from "react";
import type { Card } from "../../models/cardModel";
import { SelectedCardContext } from "./selectedCardContext";

export const SelectedCardProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleSelectedCard = (cardSelected: Card | null) => {
    setSelectedCard((prev) => (prev?.id === cardSelected?.id ? null : cardSelected));
  };

  return (
    <SelectedCardContext.Provider value={{ selectedCard, handleSelectedCard }}>
      {children}
    </SelectedCardContext.Provider>
  );
};
