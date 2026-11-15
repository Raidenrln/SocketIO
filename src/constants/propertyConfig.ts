export const propertyConfig = {
  pink: { hex: "#D93A96", set: 3, rentPrice: [1, 2, 4] },
  brown: { hex: "#955436", set: 2, rentPrice: [1, 2] },
  blue: { hex: "#0072BB", set: 2, rentPrice: [3, 8] },
  green: { hex: "#1FB25A", set: 3, rentPrice: [2, 4, 7] },
  light_blue: { hex: "#AAE0FA", set: 3, rentPrice: [1, 2, 3] },
  orange: { hex: "#F7941D", set: 3, rentPrice: [1, 3, 5] },
  black: { hex: "#333333", set: 4, rentPrice: [1, 2, 3, 4] },
  red: { hex: "#ED1B24", set: 3, rentPrice: [2, 3, 6] },
  light_green: { hex: "#1FB25A", set: 2, rentPrice: [1, 2] },
  yellow: { hex: "#FEF200", set: 3, rentPrice: [2, 4, 6] },
} as const;

export type PropertyColor = keyof typeof propertyConfig;
