import { useContext } from "react";
import { SelectedCardContext } from "./selectedCardContext";

export const useSelectedCard = () => {
  const context = useContext(SelectedCardContext);

  if (!context) {
    throw new Error("useSelectedCard must be used within SelectedCardProvider");
  }
  return context;
};
