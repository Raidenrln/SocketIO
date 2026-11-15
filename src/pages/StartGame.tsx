import { useLobby } from "../context/lobbyContext/useLobby";
import { useGame } from "../context/gameContext/useGame";
import { useEffect } from "react";
import { socket } from "../socket";

const StartGame = () => {
  const { lobby } = useLobby();
  const { hand, handleDrawCard } = useGame();

  const room = lobby.room;

  const players = room?.players ?? [];

  const localPlayer = players.find((p) => p.id === socket.id);

  const opponents = players.filter((p) => p.id !== socket.id);

  const opponentHandCount = opponents.reduce((total, p) => total + p.handCount, 0);

  const opponentProperty = opponents;

  useEffect(() => {
    if (!room) return;

    console.log("Room:", room);
    console.log("Opponent cards:", opponentHandCount);
    console.log("Opponent:", opponentProperty);
    console.log("Local player:", localPlayer);
  }, [room, opponentHandCount, opponentProperty, localPlayer]);

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

        {/* Your hand */}
        <div className="flex gap-2">
          {hand.map((card) => (
            <div key={card.id} className="bg-white p-4 rounded">
              {card.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartGame;
