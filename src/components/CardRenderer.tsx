import type { Card } from "../models/cardModel";
import ActionCard from "./CardDesigns/ActionCard";
import MoneyCard from "./CardDesigns/MoneyCard";
import PropertyCard from "./CardDesigns/PropertyCard";
import RentCard from "./CardDesigns/RentCard";

interface CardRendererModel {
  card: Card;
  variant?: string;
  onHandPressCard?: (cardId: string) => void;
}

const CardRenderer = ({ card, variant, onHandPressCard }: CardRendererModel) => {
  switch (card.type) {
    case "property":
      return (
        <PropertyCard card={card} onClickCard={variant === "hand" ? onHandPressCard : undefined} />
      );
    case "money":
      return (
        <MoneyCard card={card} onClickCard={variant === "hand" ? onHandPressCard : undefined} />
      );
    case "action":
      return (
        <ActionCard card={card} onClickCard={variant === "hand" ? onHandPressCard : undefined} />
      );
    case "rent":
      return (
        <RentCard card={card} onClickCard={variant === "hand" ? onHandPressCard : undefined} />
      );
    default:
      return null;
  }
};

export default CardRenderer;
