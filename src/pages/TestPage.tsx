import { useState } from "react";
import { TestComponent1 } from "../components/useContextTest/TestComponent1";

import { TestComponent2 } from "../components/useContextTest/TestComponent2";
import { TestComponent3 } from "../components/useContextTest/TestComponent3";
import { TestProvider } from "../components/useContextTest/TestProvider";

export const TestPage = () => {
  return (
    <TestProvider>
      <>
        <TestComponent2 />
        <TestComponent3 />
      </>
    </TestProvider>
  );
};
