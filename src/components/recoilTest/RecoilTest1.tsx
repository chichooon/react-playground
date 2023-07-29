import { useSetRecoilState } from "recoil";
import { testState } from "../../atoms/testState";

export const RecoilTest1 = () => {
  const setCount = useSetRecoilState(testState);

  return (
    <button type="button" onClick={() => setCount((prev) => prev + 1)}>
      증가
    </button>
  );
};
