import { useRecoilValue } from "recoil";
import { testState } from "../../states/atoms/testState";

export const RecoilTest2 = () => {
  const count = useRecoilValue(testState);

  return <span>{count}</span>;
};
