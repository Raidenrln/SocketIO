import { useEffect, useState } from "react";
import { socket } from "./socket";

type ChatMessage = {
  id: string;
  m: string;
};

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [connected, setConnected] = useState(socket.connected);
  useEffect(() => {
    const onConnect = () => setConnected(true);
    const onDisconnect = () => setConnected(false);
    const onMessage = (data: ChatMessage) => setMessages((prev) => [...prev, data]);

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("receive-msg", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("receive-msg", onMessage);
    };
  }, []);

  const handleSendChat = () => {
    const trimmed = message.trim();
    if (!trimmed || !connected) return;
    socket.emit("send-message", trimmed);
    setMessage("");
  };

  const handleCreateRoom = (roomName: string) => {
    socket.emit("create-room", roomName, (response) => {
      if (response.success) {
        console.log("Server generated Room ID:", response.roomId);
      }
    });
  };

  const handleToggleConnection = () => {
    if (connected) socket.disconnect();
    else socket.connect();
  };

  return (
    <div>
      <p>Status: {connected ? "Connected" : "Disconnected"}</p>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendChat()}
      />
      <button onClick={handleSendChat} disabled={!connected}>
        Send Chat
      </button>
      <button onClick={handleToggleConnection}>
        {connected ? "Disconnect" : "Connect to Chat"}
      </button>
      {messages.map((m, i) => (
        <div key={`${m.id}-${i}`}>
          <p>{m.m}</p>
        </div>
      ))}
      <button onClick={() => handleCreateRoom("Roluna")}>Create room</button>
    </div>
  );
}

export default App;
