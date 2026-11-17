import type { PropertyColor } from "../constants/propertyConfig";

export type Card = {
  id: string;
  name: string;
  type: "property" | "action" | "rent" | "money";
  value: number;
  color?: PropertyColor;
  secondaryColor?: PropertyColor;
  isWildcard?: boolean;
};
