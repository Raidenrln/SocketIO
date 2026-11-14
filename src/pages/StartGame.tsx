import { useLobby } from "../context/lobbyContext/useLobby";
import { useGame } from "../context/gameContext/useGame";

const StartGame = () => {
  const { lobby } = useLobby();
  const { hand } = useGame();

  return (
    <div className="min-h-screen bg-(--bg-color)">
      <h1>Game</h1>

      <p>Cards remaining: {lobby.room.deck.length}</p>

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
