import { createContext } from "react";
import GlobalProfile from "../Types/GlobalProfile";

const initialContext: GlobalProfile = {
  name: "anonymous",
  setName: () => {},
};

export const ProfileContext = createContext(initialContext);