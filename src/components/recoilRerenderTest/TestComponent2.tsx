import { TestComponent1 } from "./TestComponent1";

export const TestComponent2 = () => {
  console.log("TestComponent2 Rerendered");
  return <TestComponent1 />;
};
