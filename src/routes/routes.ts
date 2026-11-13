import { createBrowserRouter } from "react-router";

import Lobby from "../pages/Lobby";
import StartGame from "../pages/StartGame";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "lobby:id",
    Component: Lobby,
  },
  {
    path: "game:id",
    Component: StartGame,
  },
]);
