export type Card = {
  id: string;
  name: string;
  type: "property" | "action" | "rent" | "money";
  value: number;
  secondaryColor?: string;
  color?: string;
  isWildcard?: boolean;
  description?: string;
};
