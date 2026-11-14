import { X } from "lucide-react";
import { useState } from "react";
import { useLobby } from "../context/lobbyContext/useLobby";
import { useNavigate } from "react-router";
interface JoinModalModel {
  name: string;
  onClose: () => void;
}
const JoinModal = ({ name, onClose }: JoinModalModel) => {
  const [lobbyCode, setLobbyCode] = useState("");
  const navigate = useNavigate();

  const { joinLobby } = useLobby();

  const handJoinLobby = async () => {
    try {
      const response = await joinLobby(lobbyCode.toUpperCase(), name);

      console.log("Joined successfully:", response);
      navigate(`/lobby/${response.id}`);
      onClose();
    } catch (error) {
      console.error("Failed to join lobby:", error);
    }
  };
  const inputEl =
    "w-full px-2.5 py-2.5 text-input rounded-input outline-none border border-(--input-border-color) shadow-xs bg-(--input-bg-color)";
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="w-full flex flex-col bg-(--bg-panel-color) px-8 py-6 rounded-panel max-w-110 gap-4 mx-4 relative">
        {/* Close button */}
        <div
          className="flex w-8 h-8 absolute top-5 right-5 bg-(--bg-color) items-center justify-center rounded-full"
          onClick={onClose}
        >
          <X color="white" size={18} />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-heading font-semibold">Join lobby</h1>
          <p className="text-caption text-(--text-muted-color)">
            Enter the code your host shared with you.
          </p>
        </div>
        <div className="flex flex-col">
          <label className="text-body font-semibold" htmlFor="">
            Lobby code
          </label>
          <input
            value={lobbyCode}
            onChange={(e) => setLobbyCode(e.target.value)}
            className={inputEl}
            type="text"
            placeholder="Enter lobby code"
            maxLength={6}
          />
          <p className="text-caption text-(--text-muted-color)">At least 6 characters</p>
        </div>
        <div className="flex flex-col gap-3">
          <button
            className={`${lobbyCode.length < 6 ? "opacity-50" : ""} w-full bg-(--btn-bg-color) text-(--btn-text-color) py-3 rounded-button`}
            disabled={lobbyCode.length < 6}
            onClick={handJoinLobby}
          >
            Join lobby
          </button>
          <button
            onClick={() => onClose()}
            className={`w-full border border-(--btn-border-color) py-3 rounded-button`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
