import { useLobby } from "../context/lobbyContext/useLobby";
import { useGame } from "../context/gameContext/useGame";
import { useEffect } from "react";
import { socket } from "../socket";

const StartGame = () => {
  const { lobby } = useLobby();
  const { hand } = useGame();

  const opponentHandCount = lobby.room.players
    .filter((p) => p.id !== socket.id)
    .reduce((total, p) => total + p.handCount, 0);

  useEffect(() => {
    console.log(lobby.room);
    console.log("Opponent cards:", opponentHandCount);
  }, [lobby.room, opponentHandCount]);

  return (
    <div className="min-h-screen bg-(--bg-color)">
      {/* Opponent hand */}
      <div className="w-full flex items-center justify-center">
        <div className="flex gap-2">
          {Array.from({ length: opponentHandCount }).map((_, index) => (
            <div
              key={index}
              className="h-25 w-16 -ml-8 shrink-0 rounded-lg bg-(--back-card-color) border-3 border-white"
            />
          ))}
        </div>
      </div>

      {/* Remaining deck */}
      <p>Cards remaining: {lobby.room.deck}</p>

      {/* Your hand */}
      <div className="flex gap-2">
        {hand.map((card) => (
          <div key={card.id} className="bg-white p-4 rounded">
            {card.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartGame;
