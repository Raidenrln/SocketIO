import type { Card } from "../models/cardModel";
import ActionCard from "./CardDesigns/ActionCard";
import MoneyCard from "./CardDesigns/MoneyCard";
import PropertyCard from "./CardDesigns/PropertyCard";
import RentCard from "./CardDesigns/RentCard";

interface CardRendererModel {
  card: Card;
}

const CardRenderer = ({ card }: CardRendererModel) => {
  switch (card.type) {
    case "property":
      return <PropertyCard card={card} />;
    case "money":
      return <MoneyCard card={card} />;
    case "action":
      return <ActionCard card={card} />;
    case "rent":
      return <RentCard card={card} />;
    default:
      return null;
  }
};

export default CardRenderer;
