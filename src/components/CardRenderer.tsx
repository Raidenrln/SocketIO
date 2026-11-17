import type { Card } from "../models/cardModel";
import ActionCard from "./CardDesigns/ActionCard";
import MoneyCard from "./CardDesigns/MoneyCard";
import PropertyCard from "./CardDesigns/PropertyCard";

interface CardRendererModel {
  card: Card;
  variant?: string;
  onPressCard?: (cardId: string) => void;
}

const CardRenderer = ({ card, variant, onPressCard }: CardRendererModel) => {
  switch (card.type) {
    case "property":
      return (
        <PropertyCard card={card} onClickCard={variant === "hand" ? onPressCard : undefined} />
      );
    case "money":
      return <MoneyCard card={card} onClickCard={variant === "hand" ? onPressCard : undefined} />;
    case "action":
      return <ActionCard card={card} onClickCard={variant === "hand" ? onPressCard : undefined} />;
    default:
      return null;
  }
};

export default CardRenderer;
