import type { Card } from "../../models/cardModel";

interface MoneyCard {
  card: Card;
  onClickCard?: (cardId: string) => void;
}
const MoneyCard = ({ card, onClickCard }: MoneyCard) => {
  if (card.type !== "money") return;
  return (
    <div
      className={`w-full min-w-32 max-w-32 h-45 bg-white rounded-sm`}
      onClick={() => onClickCard?.(card.id)}
    >
      <div className="p-2 h-full">
        <div
          className="flex items-center justify-center p-2 relative border h-full"
          style={{ backgroundColor: card.color }}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 p-8 bg-white">
            <span className="font-semibold">₱{card.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyCard;
