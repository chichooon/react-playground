import { memo, useContext } from "react";

import { TestContext } from "../../context/TestContext";

export const TestComponent3 = () => {
  useContext(TestContext);
  console.log("TestComponent3 Rerendered");
  return <div>This is TestComponent3</div>;
};
