import { Copy } from "lucide-react";
import { useLobby } from "../context/lobbyContext/useLobby";
// import { useUser } from "../context/userContext/useUser";
import { socket } from "../socket";
import { useNavigate } from "react-router";
import type { LobbyResponseModel } from "../models/lobbyModel";
import { useEffect } from "react";
function Lobby() {
  const navigate = useNavigate();
  const { lobby } = useLobby();
  // const { username } = useUser();
  const players = lobby.room.players ?? [];

  const handleStartGame = () => {
    socket.emit("start-game", lobby.id, (response: { message: string }) => {
      console.log(response.message);
    });
  };

  useEffect(() => {
    const handleGameStarted = (response: LobbyResponseModel) => {
      navigate(`/game/${response.id}`);
    };

    socket.on("game-started", handleGameStarted);

    return () => {
      socket.off("game-started", handleGameStarted);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--bg-color)">
      <div className="flex flex-col bg-(--bg-panel-color) w-full max-w-110 p-8 rounded-panel gap-2 mx-4">
        <div className="flex flex-col">
          <p className="text-caption text-(--text-muted-color)">Room code</p>
          <div className="flex">
            <h1 className="text-subheading tracking-[8px] font-medium">{lobby.id}</h1>
            <button>
              <Copy size={16} color="grey" />
            </button>
          </div>
        </div>
        {/* Top header of players */}
        <div className="flex justify-between">
          <span className="text-body">Players</span>
          <span className="text-body">
            {lobby.room.players.length} of {lobby.room.maxPlayers} players
          </span>
        </div>
        <div>
          <span className="text-caption text-(--text-muted-color)">
            Pick your seat. Seat 1 plays first, then play goes in order.
          </span>
        </div>
        {/* Player list */}
        <div className="flex flex-col gap-2.5">
          {players.map((p, i) => {
            return (
              <div
                key={p.id}
                className={`h-12.5 flex justify-between bg-white border-2 p-3 rounded-panel gap-2 items-center ${
                  p.id === lobby.room.hostId
                    ? "border-(--bg-color)"
                    : p.id === socket.id
                      ? "border-blue-500"
                      : "border-gray-300"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-(--border-panel-color) flex items-center justify-center">
                  <span className="text-white text-caption">{i + 1}</span>
                </div>

                <span className="text-body font-medium text-(--text-primary-color) flex-1">
                  {p.name}
                </span>
                <span className="text-caption text-(--text-muted-color)">
                  {p.id === lobby.room.hostId
                    ? p.id === socket.id
                      ? "Host · you"
                      : "Host"
                    : p.id === socket.id
                      ? "You"
                      : ""}
                </span>
              </div>
            );
          })}

          {/* <div className="h-12.5 flex justify-between border border-dashed border-(--border-muted-panel-color) p-3 rounded-panel gap-2 items-center">
            <div className="w-6 h-6 rounded-full bg-(--border-muted-panel-color) flex items-center justify-center">
              <span className="text-white text-caption">2</span>
            </div>

            <span className="text-body font-medium text-(--text-primary-color) flex-1">
              Open seat
            </span>
            <button className="bg-white px-2.5 py-1 rounded-button border border-(--border-muted-panel-color)">
              <span className="text-caption">Take seat</span>
            </button>
          </div>
          <div className="h-12.5 flex justify-between border border-dashed border-(--border-muted-panel-color) p-3 rounded-panel gap-2 items-center">
            <div className="w-6 h-6 rounded-full bg-(--border-muted-panel-color) flex items-center justify-center">
              <span className="text-white text-caption">3</span>
            </div>

            <span className="text-body font-medium text-(--text-primary-color) flex-1">
              Open seat
            </span>
            <button className="bg-white px-2.5 py-1 rounded-button border border-(--border-muted-panel-color)">
              <span className="text-caption">Take seat</span>
            </button>
          </div>
          <div className="h-12.5 flex justify-between border border-dashed border-(--border-muted-panel-color) p-3 rounded-panel gap-2 items-center">
            <div className="w-6 h-6 rounded-full bg-(--border-muted-panel-color) flex items-center justify-center">
              <span className="text-white text-caption">4</span>
            </div>

            <span className="text-body font-medium text-(--text-primary-color) flex-1">
              Open seat
            </span>
            <button className="bg-white px-2.5 py-1 rounded-button border border-(--border-muted-panel-color)">
              <span className="text-caption">Take seat</span>
            </button>
          </div>
          <div className="h-12.5 flex justify-between border border-dashed border-(--border-muted-panel-color) p-3 rounded-panel gap-2 items-center">
            <div className="w-6 h-6 rounded-full bg-(--border-muted-panel-color) flex items-center justify-center">
              <span className="text-white text-caption">5</span>
            </div>

            <span className="text-body font-medium text-(--text-primary-color) flex-1">
              Open seat
            </span>
            <button className="bg-white px-2.5 py-1 rounded-button border border-(--border-muted-panel-color)">
              <span className="text-caption">Take seat</span>
            </button>
          </div> */}
        </div>
        {/* Start button & Leave lobby*/}
        <div className="flex flex-col gap-2">
          {socket.id === lobby.room.hostId && (
            <button
              className={`${players.length < 2 && "opacity-50"} bg-(--btn-bg-color) p-3 rounded-button`}
              disabled={players.length < 2}
              onClick={handleStartGame}
            >
              <span className="text-white">Start game (need 2 players)</span>
            </button>
          )}

          <button className="border p-3 rounded-button">
            <span>Leave lobby</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lobby;
