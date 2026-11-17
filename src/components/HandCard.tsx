import type { Card } from "../models/cardModel";
import CardRenderer from "./CardRenderer";

interface HandCardModel {
  card: Card;
  onChoose: (cardId: string) => void;
}
const HandCard = ({ card, onChoose }: HandCardModel) => {
  return <CardRenderer card={card} variant="hand" onPressCard={onChoose} />;
};

export default HandCard;
