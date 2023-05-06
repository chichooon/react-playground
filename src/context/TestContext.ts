import { createContext, Dispatch, SetStateAction } from "react";

interface ContextType {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export const TestContext = createContext<ContextType>({
  text: "",
  setText: () => {},
});
