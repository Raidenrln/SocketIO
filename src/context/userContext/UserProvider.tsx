import { useState } from "react";
import UserContext from "./userContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUsername] = useState("");

  const addUser = (username: string) => {
    setUsername(username);
  };

  return <UserContext.Provider value={{ user, addUser }}>{children}</UserContext.Provider>;
};
