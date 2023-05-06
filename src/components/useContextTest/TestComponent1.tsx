import { ChangeEvent, useCallback, useContext, useEffect } from "react";

import { SetTestContext, TestContext } from "../../context/TestContext";

export const TestComponent1 = () => {
  const { text } = useContext(TestContext);
  const { setText } = useContext(SetTestContext);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    [setText]
  );

  return (
    <div>
      {text} in TestComponent1
      <input value={text} onChange={handleChange} />
    </div>
  );
};
