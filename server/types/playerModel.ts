import { Card } from "./cardModel";

export type Player = {
  id: string;
  name: string;
  hand: Card[];
  bank: Card[];
  properties: Card[];
};
export type PublicPlayer = {
  id: string;
  name: string;
  handCount: number;
  bank: Card[];
  properties: Card[];
};
