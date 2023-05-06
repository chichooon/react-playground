import { createContext, Dispatch, SetStateAction } from "react";

interface TestContextType {
  text: string;
}

interface SetTestContextType {
  setText: Dispatch<SetStateAction<string>>;
}

export const TestContext = createContext<TestContextType>({
  text: "",
});

export const SetTestContext = createContext<SetTestContextType>({
  setText: () => {},
});
