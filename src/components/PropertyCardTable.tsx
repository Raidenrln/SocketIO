import { useGame } from "../context/gameContext/useGame";
import { useSelectedCard } from "../context/selectedCard/useSelectedCard";
import type { Card } from "../models/cardModel";
import CardRenderer from "./CardRenderer";

interface PropertyCardTable {
  card: Card;
}

const PropertyCardTable = ({ card }: PropertyCardTable) => {
  const { selectedCard } = useSelectedCard();
  const { handlePlacingExistProperty } = useGame();
  if (card.type !== "property") return;

  let isMatch = card.isWildcard
    ? card.color === selectedCard?.color ||
      card.color === selectedCard?.secondaryColor ||
      card.secondaryColor === selectedCard?.color ||
      card.secondaryColor === selectedCard?.secondaryColor
    : card.color === selectedCard?.color;

  // console.log("Selected: ", selectedCard);

  if (!selectedCard || selectedCard.type !== "property") {
    isMatch = false;
  }

  if (selectedCard?.value === 0) {
    isMatch = true;
  }

  return (
    <div
      className={`${isMatch ? "z-10 -translate-y-1 scale-105 " : ""}`}
      onClick={() => {
        console.log("ASDSA");
        handlePlacingExistProperty(card.id, selectedCard!.id, "existProperty");
      }}
    >
      <CardRenderer card={card} />
    </div>
  );
};

export default PropertyCardTable;
