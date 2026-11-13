import { useNavigate } from "react-router";

function Lobby() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Lobby</h1>

      <button onClick={() => navigate("/game")}>Start Game</button>
    </div>
  );
}

export default Lobby;
