import type { Card } from "../models/cardModel";
import CardRenderer from "./CardRenderer";

interface BankCardsModel {
  card: Card;
}

const BankCards = ({ card }: BankCardsModel) => {
  return <CardRenderer card={card} />;
};

export default BankCards;
