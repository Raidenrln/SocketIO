import { useState } from "react";
import { useNavigate } from "react-router";
// import { socket } from "../socket";
import { useUser } from "../context/userContext/useUser";
import { useLobby } from "../context/lobbyContext/useLobby";
import JoinModal from "../components/JoinModal";
const Home = () => {
  const navigate = useNavigate();

  const { createLobby } = useLobby();
  const { addUser } = useUser();
  const [name, setname] = useState("");
  const [showJoinModal, setShowJoinModal] = useState(false);
  const inputEl =
    "w-full px-2.5 py-2.5 text-input rounded-input outline-none border border-(--input-border-color) shadow-xs bg-(--input-bg-color)";
  const handleCreateLobby = async () => {
    try {
      addUser(name);
      const response = await createLobby(name);

      navigate(`/lobby/${response.id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const handleShowJoinModal = () => {
    setShowJoinModal((prev) => !prev);
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-(--bg-color)">
        {showJoinModal ? (
          <JoinModal name={name} onClose={handleShowJoinModal} />
        ) : (
          <div className="w-full flex flex-col bg-(--bg-panel-color) px-8 py-6 rounded-panel max-w-110 gap-4 mx-4">
            <div className="w-full flex flex-col gap-1">
              <h1 className="text-heading font-semibold">Monopoly card game</h1>
              <p className="text-caption text-(--text-muted-color)">
                Play with 2 to 5 players. Pick a username to start.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-body font-semibold">Your username</label>
              <input
                onChange={(e) => setname(e.target.value)}
                value={name}
                className={inputEl}
                type="text"
                placeholder="Enter your username"
              />
              <p className="text-caption text-(--text-muted-color)">At least 2 characters</p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                className={`${name.length < 2 ? "opacity-50" : ""} w-full bg-(--btn-bg-color) text-(--btn-text-color) py-3 rounded-button`}
                disabled={name.length < 2}
                onClick={handleCreateLobby}
              >
                Create lobby
              </button>
              <button
                className={`${name.length < 2 ? "opacity-50" : ""} w-full border border-(--btn-border-color) py-3 rounded-button`}
                disabled={name.length < 2}
                onClick={handleShowJoinModal}
              >
                Join lobby
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
