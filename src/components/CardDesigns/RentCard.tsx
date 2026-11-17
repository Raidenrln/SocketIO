import type { CSSProperties } from "react";
import type { Card } from "../../models/cardModel";
import { propertyConfig, type PropertyColor } from "../../constants/propertyConfig";

interface RentCardModel {
  card: Card;
  onClickCard?: (cardId: string) => void;
}

const RentCart = ({ card, onClickCard }: RentCardModel) => {
  if (card.type !== "rent") return null;

  const primaryColor = card.color ? propertyConfig[card.color as PropertyColor].hex : "#ffffff";

  const secondaryColor = card.secondaryColor
    ? propertyConfig[card.secondaryColor as PropertyColor].hex
    : "#ffffff";

  const backgroundStyle: CSSProperties = card.isWildcard
    ? {
        background: `linear-gradient(
        135deg,
        #FF0000,
        #FF7F00,
        #FFFF00,
        #00FF00,
        #0000FF,
        #4B0082,
        #9400D3
      )`,
      }
    : card.secondaryColor
      ? {
          background: `linear-gradient(
          124deg,
          ${primaryColor} 49.5%,
          ${secondaryColor} 50.5%
        )`,
        }
      : {
          backgroundColor: primaryColor,
        };
  return (
    <div
      className="w-full min-w-32 max-w-32 h-45 bg-white rounded-sm cursor-pointer"
      onClick={() => onClickCard?.(card.id)}
    >
      <div className="p-2 h-full">
        <div
          className="flex items-center justify-center p-2 relative border h-full"
          style={backgroundStyle}
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

export default RentCart;
