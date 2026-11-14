import { createContext } from "react";

export interface UserContextModel {
  username: string;
  addUser: (username: string) => void;
}

const userContext = createContext<UserContextModel | null>(null);

export default userContext;
