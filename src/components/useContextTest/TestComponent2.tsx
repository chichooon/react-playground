import { memo } from "react";
import { TestComponent1 } from "./TestComponent1";

export const TestComponent2 = memo(() => {
  console.log("TestComponent2 Rerendered");
  return <TestComponent1 />;
});
