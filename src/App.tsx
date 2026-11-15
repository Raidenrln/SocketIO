import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { UserProvider } from "./context/userContext/UserProvider";
import { LobbyProvider } from "./context/lobbyContext/LobbyProvider";
import { GameProvider } from "./context/gameContext/GameProvider";

function App() {
  return (
    <LobbyProvider>
      <GameProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </GameProvider>
    </LobbyProvider>
  );
}

export default App;
