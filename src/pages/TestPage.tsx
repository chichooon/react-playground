import { useState } from "react";

import { TestComponent2 } from "../components/useContextTest/TestComponent2";
import { TestComponent3 } from "../components/useContextTest/TestComponent3";
import { TestContext } from "../context/TestContext";

export const TestPage = () => {
  const [text, setText] = useState("");

  console.log("test page rerendered");
  return (
    <>
      <TestContext.Provider value={{ text, setText }}>
        <TestComponent2 />
        <TestComponent3 />
      </TestContext.Provider>
    </>
  );
};
