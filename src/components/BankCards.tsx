import type { Card } from "../models/cardModel";
import PropertyCard from "./PropertyCard";

interface BankCardsModel {
  card: Card;
}
const BankCards = ({ card }: BankCardsModel) => {
  if (card.type === "property") {
    return <PropertyCard card={card} />;
  }
};

export default BankCards;
