import { useLobby } from "../context/lobbyContext/useLobby";
import { useGame } from "../context/gameContext/useGame";
import { useEffect } from "react";
import { socket } from "../socket";
import PropertyCard from "../components/CardDesigns/PropertyCard";
import BankCards from "../components/BankCards";
import HandCard from "../components/HandCard";
import PropertyCardTable from "../components/PropertyCardTable";
import { useSelectedCard } from "../context/selectedCard/useSelectedCard";

const StartGame = () => {
  const { lobby } = useLobby();
  const { hand, handleDrawCard, handlePlacingCard } = useGame();
  const { selectedCard } = useSelectedCard();
  const room = lobby.room;

  const players = room?.players ?? [];

  const localPlayer = players.find((p) => p.id === socket.id);
  const localPlayerProperties = localPlayer?.properties;
  const localPlayerBank = localPlayer?.bank;
  const opponents = players.filter((p) => p.id !== socket.id);

  const opponentHandCount = opponents.reduce((total, p) => total + p.handCount, 0);
  const opponentProperty = opponents[0];
  const opponentBank = opponentProperty.bank;

  const handleEndTurn = (roomId: string, playerId: string) => {
    socket.emit("end-turn", { roomId, playerId }, (response: { message: string }) => {
      console.log(response.message);
    });
  };
  useEffect(() => {
    if (!room) return;

    // console.log("Room:", room);
    // console.log("Opponent cards:", opponentHandCount);
    // console.log("Opponent:", opponentProperty);
    // console.log("Local player:", localPlayer);
    // console.log("Hand:", hand);
    console.log("Properties", localPlayerProperties);
    // console.log("Bank:", localPlayerBank);
    // console.log(selectedCard);
  }, [
    room,
    opponentHandCount,
    opponentProperty,
    localPlayer,
    hand,
    localPlayerProperties,
    localPlayerBank,
    selectedCard,
  ]);

  if (!room) {
    return <div>Loading game...</div>;
  }

  return (
    <div className="flex flex-col items h-screen bg-(--bg-color) relative">
      <div className="h-full p-4 flex flex-col justify-between">
        {/* Opponent hand */}
        <div className="w-full flex items-center justify-center">
          <div className="flex gap-2">
            {Array.from({ length: opponentHandCount }).map((_, index) => (
              <div
                key={index}
                className="h-25 w-16 shrink-0 rounded-lg bg-(--back-card-color) border-3 border-white"
              />
            ))}
          </div>
        </div>

        {/* Opponent properties */}
        <div className="flex w-full items-center">
          <div className="flex h-fit gap-2 w-full p-2 border border-white">
            {opponentProperty ? (
              <div className="flex gap-2 h-full w-full ">
                {opponentProperty.properties
                  .filter((c) => c.type === "property")
                  .map((c) => (
                    <PropertyCard key={c.id} card={c} />
                  ))}
              </div>
            ) : (
              <div className="text-white text-center">Waiting for opponent...</div>
            )}
          </div>
          <div className="flex h-full p-2 w-41.25">
            <div className="flex gap-2 h-full w-full p-2 rounded-sm justify-center">
              {opponentBank.length ? (
                <PropertyCard
                  key={opponentBank[opponentBank.length - 1].id}
                  card={opponentBank[opponentBank.length - 1]}
                />
              ) : null}
            </div>
          </div>
        </div>

        {/* Remaining deck */}
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center">
            <div
              className="h-25 w-16 shrink-0 rounded-lg bg-(--back-card-color) border-3 border-white cursor-pointer"
              onClick={() => {
                if (!localPlayer) return;
                handleDrawCard(localPlayer.id, lobby.id);
              }}
            />
            <p className="text-caption text-white">Draw pile - {room.deck}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="h-25 w-16 shrink-0 rounded-lg bg-(--back-card-color) border-3 border-white" />
            <p className="text-caption text-white">Discard pile - 0</p>
          </div>
        </div>
        {/* Local player properties and Banks */}
        <div className="flex w-full items-center">
          {/* Local Player Properties */}
          <div className="flex h-full p-2 flex-1">
            <div
              className="flex gap-2 border border-white h-full w-full p-2 rounded-sm justify-center"
              onClick={() => handlePlacingCard(localPlayer!.id, selectedCard!.id, "property")}
            >
              {localPlayerProperties?.map((c) => {
                if (c.type !== "property") return;
                return <PropertyCardTable card={c} />;
              })}
            </div>
          </div>
          {/* Local Player Bank */}
          <div className="flex h-full w-41.25">
            <div
              className="flex gap-2 h-full w-full p-2 rounded-sm justify-center items-center"
              onClick={() => handlePlacingCard(localPlayer!.id, selectedCard!.id, "bank")}
            >
              {localPlayerBank?.length ? (
                <BankCards card={localPlayerBank[localPlayerBank.length - 1]} />
              ) : null}
            </div>
          </div>
        </div>

        {/* Local Player hand */}
        <div className="flex items-center justify-center gap-2 h-50">
          {hand.map((c) => (
            <HandCard card={c} />
          ))}
        </div>
      </div>
      {/* End turn button */}
      <div className="absolute bottom-5 right-5 rounded-button overflow-hidden">
        <button
          className="bg-(--btn-bg-color) px-4 py-2 cursor-pointer"
          style={{
            opacity:
              lobby.room.players[lobby.room.currentPlayerIndex].id !== localPlayer?.id ? 0.5 : 1,
          }}
          onClick={() => handleEndTurn(lobby.id, localPlayer!.id)}
          disabled={lobby.room.players[lobby.room.currentPlayerIndex].id !== localPlayer?.id}
        >
          <span className="text-white">End turn</span>
        </button>
      </div>
    </div>
  );
};

export default StartGame;
