import { useState } from "react";

import { TestContext } from "../../context/TestContext";

export const TestProvider = ({ children }: { children: JSX.Element }) => {
  const [text, setText] = useState("");

  return (
    <TestContext.Provider value={{ text, setText }}>
      {children}
    </TestContext.Provider>
  );
};
