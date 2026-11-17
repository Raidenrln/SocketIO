import type { Card } from "../../models/cardModel";

interface ActionCardModel {
  card: Card;
  onClickCard?: (cardId: string) => void;
}

const ActionCard = ({ card, onClickCard }: ActionCardModel) => {
  if (card.type !== "action") return;
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
          <div className="flex bg-white h-5 w-5 rounded-full items-center justify-center absolute border left-0.5 top-0.5">
            <span className="text-[10px] font-semibold">{card.value}M</span>
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 p-8 bg-white">
            <span className="font-semibold text-center text-[12px]">{card.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
