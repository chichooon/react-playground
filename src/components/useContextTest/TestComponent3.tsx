import { memo } from "react";

export const TestComponent3 = memo(() => {
  console.log("TestComponent3 Rerendered");
  return <div>This is TestComponent3</div>;
});
