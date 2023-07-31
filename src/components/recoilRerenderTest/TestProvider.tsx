import { useState } from "react";

import { TestContext, SetTestContext } from "../../context/TestContext";

export const TestProvider = ({ children }: { children: JSX.Element }) => {
  const [text, setText] = useState("");

  return (
    <SetTestContext.Provider value={{ setText }}>
      <TestContext.Provider value={{ text }}>{children}</TestContext.Provider>
    </SetTestContext.Provider>
  );
};
