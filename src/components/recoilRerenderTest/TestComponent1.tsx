import { ChangeEvent, useCallback } from "react";

import { useRecoilState } from "recoil";
import { recoilTestState } from "../../states/atoms/recoilTestState";

export const TestComponent1 = () => {
  const [text, setText] = useRecoilState(recoilTestState);
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
