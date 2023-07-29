import { useRecoilValue } from "recoil";
import { doubleSelector } from "../../states/selectors/doubleSelector";

export const RecoilTest3 = () => {
  const doubleCount = useRecoilValue(doubleSelector);

  return <span>{doubleCount}</span>;
};
