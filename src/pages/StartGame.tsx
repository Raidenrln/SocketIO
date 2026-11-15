import { useLobby } from "../context/lobbyContext/useLobby";
import { useGame } from "../context/gameContext/useGame";
import { useEffect, useState } from "react";
import { socket } from "../socket";
import { propertyConfig, type PropertyColor } from "../constants/propertyConfig";
import PropertyCard from "../components/PropertyCard";

const StartGame = () => {
  const { lobby } = useLobby();
  const { hand, handleDrawCard, handlePlacingCard } = useGame();
  const [selectedCard, setSelectedCard] = useState("");
  const room = lobby.room;

  const players = room?.players ?? [];

  const localPlayer = players.find((p) => p.id === socket.id);
  const localPlayerProperties = localPlayer?.properties;
  const opponents = players.filter((p) => p.id !== socket.id);

  const opponentHandCount = opponents.reduce((total, p) => total + p.handCount, 0);

  const opponentProperty = opponents[0];

  useEffect(() => {
    if (!room) return;

    // console.log("Room:", room);
    // console.log("Opponent cards:", opponentHandCount);
    console.log("Opponent:", opponentProperty);
    // console.log("Local player:", localPlayer);
    console.log("Hand:", hand);
    console.log("Properties", localPlayerProperties);
  }, [room, opponentHandCount, opponentProperty, localPlayer, hand, localPlayerProperties]);

  if (!room) {
    return <div>Loading game...</div>;
  }

  return (
    <div className="min-h-screen bg-(--bg-color)">
      <div className="p-4">
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
        <div className="flex gap-2">
          {opponentProperty.properties.map((c) => {
            if (c.type !== "property") return;
            return <PropertyCard c={c} />;
          })}
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
        {/* Local player properties and banks */}
        <div className="flex gap-2">
          {localPlayerProperties?.map((c) => {
            if (c.type !== "property") return;
            return <PropertyCard c={c} />;
          })}
        </div>

        {/* Your hand */}
        <div className="flex items-center justify-center gap-2">
          {hand.map((c) => {
            return <PropertyCard c={c} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default StartGame;
