import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { UserProvider } from "./context/userContext/UserProvider";
import { LobbyProvider } from "./context/lobbyContext/LobbyProvider";
import { GameProvider } from "./context/gameContext/GameProvider";
import { SelectedCardProvider } from "./context/selectedCard/SelectedCardProvider";

function App() {
  return (
    <SelectedCardProvider>
      <LobbyProvider>
        <GameProvider>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </GameProvider>
      </LobbyProvider>
    </SelectedCardProvider>
  );
}

export default App;
