import type { Card } from "./cardModel";

export type Player = {
  id: string;
  name: string;
  card: Card[];
};
