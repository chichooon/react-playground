import { useContext } from "react";

import { SetTestContext } from "../../context/TestContext";

export const TestComponent3 = () => {
  useContext(SetTestContext);
  console.log("TestComponent3 Rerendered");
  return <div>This is TestComponent3</div>;
};
