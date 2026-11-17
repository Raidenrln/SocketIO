import type { CSSProperties } from "react";
import { propertyConfig, type PropertyColor } from "../../constants/propertyConfig";
import type { Card } from "../../models/cardModel";

type PropertyCardModel = {
  card: Card;
  onClickCard?: (cardId: string) => void;
};

const PropertyCard = ({ card, onClickCard }: PropertyCardModel) => {
  if (card.type !== "property") return;
  const colors = card.color ? propertyConfig[card.color].hex : "#ffffff";
  const colorx: PropertyColor | undefined = card.color;
  const rentPrice = colorx ? propertyConfig[colorx].rentPrice : [];
  const backgroundColor: CSSProperties = card.isWildcard
    ? {
        background: `linear-gradient(135deg, #FF0000 ,#FF7F00 ,#FFFF00 ,#00FF00 ,#0000FF ,#4B0082 ,#9400D3)`,
      }
    : {
        backgroundColor: colors,
      };
  return (
    <div
      key={card.id}
      className="w-full min-w-32 max-w-32 h-45 bg-white rounded-sm z-1"
      onClick={() => onClickCard?.(card.id)}
    >
      <div className="p-2 h-full">
        <div className="p-2 relative border h-full">
          <div className="flex bg-white h-5 w-5 rounded-full items-center justify-center absolute border left-0.5 top-0.5">
            <span className="text-[10px] font-semibold">{card.value}M</span>
          </div>
          <div className="bg-white border" style={backgroundColor}>
            <p className="text-caption whitespace-normal wrap-break-word text-center p-2 font-semibold">
              {card.name}
            </p>
          </div>
          <div className="flex flex-col gap-1 px-2">
            <div className="flex justify-between">
              <span className="text-[10px]">No.</span>
              <span className="text-[10px]">Rent</span>
            </div>
            <div className="flex flex-col gap-1">
              {rentPrice.map((price, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: i + 1 }, (_, j) => (
                      <div
                        key={j}
                        className="w-2 h-3 rounded-xs"
                        style={{ backgroundColor: colors }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between w-5">
                    <span className="text-[10px] text-center font-semibold">₱{price}M</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
