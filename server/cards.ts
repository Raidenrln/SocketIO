import { Card } from "./types/cardModel";

export const cards: Card[] = [
  // ==========================================
  // STANDARD PROPERTIES (28 cards)
  // ==========================================
  // Brown (2)
  {
    id: "prop-brown-1",
    name: "Mediterranean Avenue",
    type: "property",
    value: 1,
    color: "brown",
    isWildcard: false,
  },
  {
    id: "prop-brown-2",
    name: "Baltic Avenue",
    type: "property",
    value: 1,
    color: "brown",
    isWildcard: false,
  },

  // Light Blue (3)
  {
    id: "prop-lblue-1",
    name: "Oriental Avenue",
    type: "property",
    value: 1,
    color: "light_blue",
    isWildcard: false,
  },
  {
    id: "prop-lblue-2",
    name: "Vermont Avenue",
    type: "property",
    value: 1,
    color: "light_blue",
    isWildcard: false,
  },
  {
    id: "prop-lblue-3",
    name: "Connecticut Avenue",
    type: "property",
    value: 1,
    color: "light_blue",
    isWildcard: false,
  },

  // Pink (3)
  {
    id: "prop-pink-1",
    name: "St. Charles Place",
    type: "property",
    value: 2,
    color: "pink",
    isWildcard: false,
  },
  {
    id: "prop-pink-2",
    name: "States Avenue",
    type: "property",
    value: 2,
    color: "pink",
    isWildcard: false,
  },
  {
    id: "prop-pink-3",
    name: "Virginia Avenue",
    type: "property",
    value: 2,
    color: "pink",
    isWildcard: false,
  },

  // Orange (3)
  {
    id: "prop-orange-1",
    name: "St. James Place",
    type: "property",
    value: 2,
    color: "orange",
    isWildcard: false,
  },
  {
    id: "prop-orange-2",
    name: "Tennessee Avenue",
    type: "property",
    value: 2,
    color: "orange",
    isWildcard: false,
  },
  {
    id: "prop-orange-3",
    name: "New York Avenue",
    type: "property",
    value: 2,
    color: "orange",
    isWildcard: false,
  },

  // Red (3)
  {
    id: "prop-red-1",
    name: "Kentucky Avenue",
    type: "property",
    value: 3,
    color: "red",
    isWildcard: false,
  },
  {
    id: "prop-red-2",
    name: "Indiana Avenue",
    type: "property",
    value: 3,
    color: "red",
    isWildcard: false,
  },
  {
    id: "prop-red-3",
    name: "Illinois Avenue",
    type: "property",
    value: 3,
    color: "red",
    isWildcard: false,
  },

  // Yellow (3)
  {
    id: "prop-yellow-1",
    name: "Atlantic Avenue",
    type: "property",
    value: 3,
    color: "yellow",
    isWildcard: false,
  },
  {
    id: "prop-yellow-2",
    name: "Ventnor Avenue",
    type: "property",
    value: 3,
    color: "yellow",
    isWildcard: false,
  },
  {
    id: "prop-yellow-3",
    name: "Marvin Gardens",
    type: "property",
    value: 3,
    color: "yellow",
    isWildcard: false,
  },

  // Green (3)
  {
    id: "prop-green-1",
    name: "Pacific Avenue",
    type: "property",
    value: 4,
    color: "green",
    isWildcard: false,
  },
  {
    id: "prop-green-2",
    name: "North Carolina Avenue",
    type: "property",
    value: 4,
    color: "green",
    isWildcard: false,
  },
  {
    id: "prop-green-3",
    name: "Pennsylvania Avenue",
    type: "property",
    value: 4,
    color: "green",
    isWildcard: false,
  },

  // Dark Blue (2)
  {
    id: "prop-blue-1",
    name: "Park Place",
    type: "property",
    value: 4,
    color: "blue",
    isWildcard: false,
  },
  {
    id: "prop-blue-2",
    name: "Boardwalk",
    type: "property",
    value: 4,
    color: "blue",
    isWildcard: false,
  },

  // Railroads / Black (4)
  {
    id: "prop-black-1",
    name: "Reading Railroad",
    type: "property",
    value: 2,
    color: "black",
    isWildcard: false,
  },
  {
    id: "prop-black-2",
    name: "Pennsylvania Railroad",
    type: "property",
    value: 2,
    color: "black",
    isWildcard: false,
  },
  {
    id: "prop-black-3",
    name: "B. & O. Railroad",
    type: "property",
    value: 2,
    color: "black",
    isWildcard: false,
  },
  {
    id: "prop-black-4",
    name: "Short Line",
    type: "property",
    value: 2,
    color: "black",
    isWildcard: false,
  },

  // Utilities / Light Green (2)
  {
    id: "prop-lgreen-1",
    name: "Electric Company",
    type: "property",
    value: 2,
    color: "light_green",
    isWildcard: true,
  },
  {
    id: "prop-lgreen-2",
    name: "Water Works",
    type: "property",
    value: 2,
    color: "light_green",
    isWildcard: true,
  },

  // ==========================================
  // PROPERTY WILDCARDS (11 cards)
  // ==========================================
  {
    id: "wild-blue-green-1",
    name: "Property Wildcard",
    type: "property",
    value: 4,
    color: "blue",
    secondaryColor: "green",
    isWildcard: true,
  },
  {
    id: "wild-green-black-1",
    name: "Property Wildcard",
    type: "property",
    value: 4,
    color: "green",
    secondaryColor: "black",
    isWildcard: true,
  },
  {
    id: "wild-lblue-black-1",
    name: "Property Wildcard",
    type: "property",
    value: 4,
    color: "light_blue",
    secondaryColor: "black",
    isWildcard: true,
  },
  {
    id: "wild-lblue-brown-1",
    name: "Property Wildcard",
    type: "property",
    value: 1,
    color: "light_blue",
    secondaryColor: "brown",
    isWildcard: true,
  },
  {
    id: "wild-pink-orange-1",
    name: "Property Wildcard",
    type: "property",
    value: 2,
    color: "pink",
    secondaryColor: "orange",
    isWildcard: true,
  },
  {
    id: "wild-pink-orange-2",
    name: "Property Wildcard",
    type: "property",
    value: 2,
    color: "pink",
    secondaryColor: "orange",
    isWildcard: true,
  },
  {
    id: "wild-red-yellow-1",
    name: "Property Wildcard",
    type: "property",
    value: 3,
    color: "red",
    secondaryColor: "yellow",
    isWildcard: true,
  },
  {
    id: "wild-red-yellow-2",
    name: "Property Wildcard",
    type: "property",
    value: 3,
    color: "red",
    secondaryColor: "yellow",
    isWildcard: true,
  },
  {
    id: "wild-lgreen-black-1",
    name: "Property Wildcard",
    type: "property",
    value: 2,
    color: "light_green",
    secondaryColor: "black",
    isWildcard: true,
  },
  {
    id: "wild-multi-1",
    name: "Multi-Color Wildcard",
    type: "property",
    value: 0,
    isWildcard: true,
    description: "Use as any property color (cannot be banked as money).",
  },
  {
    id: "wild-multi-2",
    name: "Multi-Color Wildcard",
    type: "property",
    value: 0,
    isWildcard: true,
    description: "Use as any property color (cannot be banked as money).",
  },

  // ==========================================
  // RENT CARDS (13 cards)
  // ==========================================
  {
    id: "rent-blue-green-1",
    name: "Rent",
    type: "rent",
    value: 1,
    color: "blue",
    secondaryColor: "green",
  },
  {
    id: "rent-blue-green-2",
    name: "Rent",
    type: "rent",
    value: 1,
    color: "blue",
    secondaryColor: "green",
  },
  {
    id: "rent-lblue-brown-1",
    name: "Rent",
    type: "rent",
    value: 1,
    color: "light_blue",
    secondaryColor: "brown",
  },
  {
    id: "rent-lblue-brown-2",
    name: "Rent",
    type: "rent",
    value: 1,
    color: "light_blue",
    secondaryColor: "brown",
  },
  {
    id: "rent-pink-orange-1",
    name: "Rent",
    type: "rent",
    value: 1,
    color: "pink",
    secondaryColor: "orange",
  },
  {
    id: "rent-pink-orange-2",
    name: "Rent",
    type: "rent",
    value: 1,
    color: "pink",
    secondaryColor: "orange",
  },
  {
    id: "rent-red-yellow-1",
    name: "Rent",
    type: "rent",
    value: 1,
    color: "red",
    secondaryColor: "yellow",
  },
  {
    id: "rent-red-yellow-2",
    name: "Rent",
    type: "rent",
    value: 1,
    color: "red",
    secondaryColor: "yellow",
  },
  {
    id: "rent-black-lgreen-1",
    name: "Rent",
    type: "rent",
    value: 1,
    color: "black",
    secondaryColor: "light_green",
  },
  {
    id: "rent-black-lgreen-2",
    name: "Rent",
    type: "rent",
    value: 1,
    color: "black",
    secondaryColor: "light_green",
  },
  {
    id: "rent-wild-1",
    name: "Wild Rent",
    type: "rent",
    value: 3,
    isWildcard: true,
    description: "Force one player to pay rent for any property color you own.",
  },
  {
    id: "rent-wild-2",
    name: "Wild Rent",
    type: "rent",
    value: 3,
    isWildcard: true,
    description: "Force one player to pay rent for any property color you own.",
  },
  {
    id: "rent-wild-3",
    name: "Wild Rent",
    type: "rent",
    value: 3,
    isWildcard: true,
    description: "Force one player to pay rent for any property color you own.",
  },

  // ==========================================
  // ACTION CARDS (34 cards)
  // ==========================================
  // Deal Breaker (2)
  {
    id: "action-dealbreaker-1",
    name: "Deal Breaker",
    type: "action",
    value: 5,
    description: "Steal a complete set of properties from any player.",
    color: "#726EA9",
  },
  {
    id: "action-dealbreaker-2",
    name: "Deal Breaker",
    type: "action",
    value: 5,
    description: "Steal a complete set of properties from any player.",
    color: "#726EA9",
  },

  // Just Say No (3)
  {
    id: "action-justsayno-1",
    name: "Just Say No",
    type: "action",
    value: 4,
    description: "Use any time an action card is played against you.",
  },
  {
    id: "action-justsayno-2",
    name: "Just Say No",
    type: "action",
    value: 4,
    description: "Use any time an action card is played against you.",
    color: "#6C98B6",
  },
  {
    id: "action-justsayno-3",
    name: "Just Say No",
    type: "action",
    value: 4,
    description: "Use any time an action card is played against you.",
    color: "#6C98B6",
  },

  // Sly Deal (3)
  {
    id: "action-slydeal-1",
    name: "Sly Deal",
    type: "action",
    value: 3,
    description: "Steal a property from the player of your choice (cannot be part of a full set).",
    color: "#AAA8B0",
  },
  {
    id: "action-slydeal-2",
    name: "Sly Deal",
    type: "action",
    value: 3,
    description: "Steal a property from the player of your choice (cannot be part of a full set).",
    color: "#AAA8B0",
  },
  {
    id: "action-slydeal-3",
    name: "Sly Deal",
    type: "action",
    value: 3,
    description: "Steal a property from the player of your choice (cannot be part of a full set).",
    color: "#AAA8B0",
  },

  // Force Deal (4)
  {
    id: "action-forcedeal-1",
    name: "Force Deal",
    type: "action",
    value: 3,
    description: "Swap any property with another player (cannot be part of a full set).",
    color: "#AFB1B4",
  },
  {
    id: "action-forcedeal-2",
    name: "Force Deal",
    type: "action",
    value: 3,
    description: "Swap any property with another player (cannot be part of a full set).",
    color: "#AFB1B4",
  },
  {
    id: "action-forcedeal-3",
    name: "Force Deal",
    type: "action",
    value: 3,
    description: "Swap any property with another player (cannot be part of a full set).",
    color: "#AFB1B4",
  },
  {
    id: "action-forcedeal-4",
    name: "Force Deal",
    type: "action",
    value: 3,
    description: "Swap any property with another player (cannot be part of a full set).",
    color: "#AFB1B4",
  },

  // Debt Collector (3)
  {
    id: "action-debtcollector-1",
    name: "Debt Collector",
    type: "action",
    value: 3,
    description: "Force any player to pay you 5M.",
    color: "#ACB9BC",
  },
  {
    id: "action-debtcollector-2",
    name: "Debt Collector",
    type: "action",
    value: 3,
    description: "Force any player to pay you 5M.",
    color: "#ACB9BC",
  },
  {
    id: "action-debtcollector-3",
    name: "Debt Collector",
    type: "action",
    value: 3,
    description: "Force any player to pay you 5M.",
    color: "#ACB9BC",
  },

  // It's My Birthday (3)
  {
    id: "action-birthday-1",
    name: "It's My Birthday",
    type: "action",
    value: 2,
    description: "All players give you 2M as a gift.",
    color: "#B1A3A6",
  },
  {
    id: "action-birthday-2",
    name: "It's My Birthday",
    type: "action",
    value: 2,
    description: "All players give you 2M as a gift.",
    color: "#B1A3A6",
  },
  {
    id: "action-birthday-3",
    name: "It's My Birthday",
    type: "action",
    value: 2,
    description: "All players give you 2M as a gift.",
    color: "#B1A3A6",
  },

  // Pass Go (10)
  {
    id: "action-passgo-1",
    name: "Pass Go",
    type: "action",
    value: 1,
    description: "Draw 2 extra cards.",
    color: "#C3C2BE",
  },
  {
    id: "action-passgo-2",
    name: "Pass Go",
    type: "action",
    value: 1,
    description: "Draw 2 extra cards.",
    color: "#C3C2BE",
  },
  {
    id: "action-passgo-3",
    name: "Pass Go",
    type: "action",
    value: 1,
    description: "Draw 2 extra cards.",
    color: "#C3C2BE",
  },
  {
    id: "action-passgo-4",
    name: "Pass Go",
    type: "action",
    value: 1,
    description: "Draw 2 extra cards.",
    color: "#C3C2BE",
  },
  {
    id: "action-passgo-5",
    name: "Pass Go",
    type: "action",
    value: 1,
    description: "Draw 2 extra cards.",
    color: "#C3C2BE",
  },
  {
    id: "action-passgo-6",
    name: "Pass Go",
    type: "action",
    value: 1,
    description: "Draw 2 extra cards.",
    color: "#C3C2BE",
  },
  {
    id: "action-passgo-7",
    name: "Pass Go",
    type: "action",
    value: 1,
    description: "Draw 2 extra cards.",
    color: "#C3C2BE",
  },
  {
    id: "action-passgo-8",
    name: "Pass Go",
    type: "action",
    value: 1,
    description: "Draw 2 extra cards.",
    color: "#C3C2BE",
  },
  {
    id: "action-passgo-9",
    name: "Pass Go",
    type: "action",
    value: 1,
    description: "Draw 2 extra cards.",
    color: "#C3C2BE",
  },
  {
    id: "action-passgo-10",
    name: "Pass Go",
    type: "action",
    value: 1,
    description: "Draw 2 extra cards.",
    color: "#C3C2BE",
  },

  // House (3)
  {
    id: "action-house-1",
    name: "House",
    type: "action",
    value: 3,
    description:
      "Add onto any full set you own to add 3M to the rent value (except Railroads and Utilities).",
    color: "#B6BDBE",
  },
  {
    id: "action-house-2",
    name: "House",
    type: "action",
    value: 3,
    description:
      "Add onto any full set you own to add 3M to the rent value (except Railroads and Utilities).",
    color: "#B6BDBE",
  },
  {
    id: "action-house-3",
    name: "House",
    type: "action",
    value: 3,
    description:
      "Add onto any full set you own to add 3M to the rent value (except Railroads and Utilities).",
    color: "#B6BDBE",
  },

  // Hotel (3)
  {
    id: "action-hotel-1",
    name: "Hotel",
    type: "action",
    value: 4,
    description: "Add onto any full set you own (with a House) to add 4M to the rent value.",
    color: "#B6C6E0",
  },
  {
    id: "action-hotel-2",
    name: "Hotel",
    type: "action",
    value: 4,
    description: "Add onto any full set you own (with a House) to add 4M to the rent value.",
    color: "#B6C6E0",
  },
  {
    id: "action-hotel-3",
    name: "Hotel",
    type: "action",
    value: 4,
    description: "Add onto any full set you own (with a House) to add 4M to the rent value.",
    color: "#B6C6E0",
  },
  {
    id: "double-rent-2",
    name: "Double rent",
    type: "action",
    value: 1,
    color: "#BCBCB2",
  },
  {
    id: "Double rent",
    name: "Hotel",
    type: "action",
    value: 1,
    color: "#BCBCB2",
  },

  // ==========================================
  // MONEY CARDS (20 cards)
  // ==========================================
  // 1M (6)
  { id: "money-1m-1", name: "1M", type: "money", value: 1, color: "#B9BFAF" },
  { id: "money-1m-2", name: "1M", type: "money", value: 1, color: "#B9BFAF" },
  { id: "money-1m-3", name: "1M", type: "money", value: 1, color: "#B9BFAF" },
  { id: "money-1m-4", name: "1M", type: "money", value: 1, color: "#B9BFAF" },
  { id: "money-1m-5", name: "1M", type: "money", value: 1, color: "#B9BFAF" },
  { id: "money-1m-6", name: "1M", type: "money", value: 1, color: "#B9BFAF" },

  // 2M (5)
  { id: "money-2m-1", name: "2M", type: "money", value: 2, color: "#B8B7BD" },
  { id: "money-2m-2", name: "2M", type: "money", value: 2, color: "#B8B7BD" },
  { id: "money-2m-3", name: "2M", type: "money", value: 2, color: "#B8B7BD" },
  { id: "money-2m-4", name: "2M", type: "money", value: 2, color: "#B8B7BD" },
  { id: "money-2m-5", name: "2M", type: "money", value: 2, color: "#B8B7BD" },

  // 3M (3)
  { id: "money-3m-1", name: "3M", type: "money", value: 3, color: "#B6B8B7" },
  { id: "money-3m-2", name: "3M", type: "money", value: 3, color: "#B6B8B7" },
  { id: "money-3m-3", name: "3M", type: "money", value: 3, color: "#B6B8B7" },

  // 4M (3)
  { id: "money-4m-1", name: "4M", type: "money", value: 4, color: "#93A7C8" },
  { id: "money-4m-2", name: "4M", type: "money", value: 4, color: "#93A7C8" },
  { id: "money-4m-3", name: "4M", type: "money", value: 4, color: "#93A7C8" },

  // 5M (2)
  { id: "money-5m-1", name: "5M", type: "money", value: 5, color: "#7774AD" },
  { id: "money-5m-2", name: "5M", type: "money", value: 5, color: "#7774AD" },

  // 10M (1)
  { id: "money-10m-1", name: "10M", type: "money", value: 10, color: "#B49450" },
];
