import { cards } from "../cards";

export const shuffleDeck = () => {
  const data = [...cards];

  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }
  return data;
};
