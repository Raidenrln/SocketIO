import { createContext } from "react";

export interface UserContextModel {
  user: string;
  addUser: (username: string) => void;
}

const userContext = createContext<UserContextModel | null>(null);

export default userContext;
