import { useSelectedCard } from "../context/selectedCard/useSelectedCard";
import type { Card } from "../models/cardModel";
import CardRenderer from "./CardRenderer";

interface HandCardModel {
  card: Card;
}
const HandCard = ({ card }: HandCardModel) => {
  const { selectedCard, handleSelectedCard } = useSelectedCard();

  return (
    <div
      onClick={() => handleSelectedCard(card)}
      className={`transition-all duration-200 ease-out ${
        card.id === selectedCard?.id
          ? "-translate-y-3 scale-105 relative border-2 border-amber-300 rounded-md shadow-md"
          : "hover:-translate-y-1 relative"
      }`}
    >
      <CardRenderer card={card} />
    </div>
  );
};

export default HandCard;
