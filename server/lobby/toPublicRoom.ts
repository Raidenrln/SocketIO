import { PrivateRoom, PublicRoom } from "../types/lobbyModel";

export const toPublicRoom = (privateRoom: PrivateRoom): PublicRoom => {
  return {
    hostId: privateRoom.hostId,
    name: privateRoom.name,
    maxPlayers: privateRoom.maxPlayers,
    status: privateRoom.status,
    deck: privateRoom.deck.length,
    discardPile: privateRoom.discardPile,
    currentPlayerIndex: privateRoom.currentPlayerIndex,
    turn: privateRoom.turn,
    players: privateRoom.players.map((player) => ({
      id: player.id,
      name: player.name,
      handCount: player.hand.length,
      bank: player.bank,
      properties: player.properties,
    })),
  };
};
