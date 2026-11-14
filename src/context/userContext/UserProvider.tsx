import { useState } from "react";
import UserContext from "./userContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState("");

  const addUser = (name: string) => {
    setUsername(name);
  };

  return <UserContext.Provider value={{ username, addUser }}>{children}</UserContext.Provider>;
};
