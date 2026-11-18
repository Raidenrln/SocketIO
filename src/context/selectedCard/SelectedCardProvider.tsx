import { useState } from "react";
import type { Card } from "../../models/cardModel";
import { SelectedCardContext } from "./selectedCardContext";

export const SelectedCardProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [selectedPropertiesCard, setSelectedPropertiesCard] = useState<Card | null>(null);

  const handleSelectedCard = (card: Card | null) => {
    setSelectedCard((prev) => (prev?.id === card?.id ? null : card));
  };

  const handleSelectedPropertiesCard = (card: Card | null) => {
    setSelectedPropertiesCard(card);
  };
  return (
    <SelectedCardContext.Provider
      value={{
        selectedCard,
        selectedPropertiesCard,
        handleSelectedCard,
        handleSelectedPropertiesCard,
      }}
    >
      {children}
    </SelectedCardContext.Provider>
  );
};
