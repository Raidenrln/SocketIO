import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { UserProvider } from "./context/userContext/UserProvider";
import { LobbyProvider } from "./context/lobbyContext/LobbyProvider";
import { GameProvider } from "./context/gameContext/GameProvider";

function App() {
  return (
    <GameProvider>
      <UserProvider>
        <LobbyProvider>
          <RouterProvider router={router} />
        </LobbyProvider>
      </UserProvider>
    </GameProvider>
  );
}

export default App;
