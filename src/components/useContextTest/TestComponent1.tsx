import { ChangeEvent, useCallback, useContext } from "react";

import { TestContext } from "../../context/TestContext";

export const TestComponent1 = () => {
  const { text, setText } = useContext(TestContext);

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
