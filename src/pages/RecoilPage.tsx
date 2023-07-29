import { useRecoilState } from "recoil";
import { testState } from "../atoms/testState";
import { RecoilTest1 } from "../components/recoilTest/RecoilTest1";
import { RecoilTest2 } from "../components/recoilTest/RecoilTest2";

export const RecoilPage = () => {
  return (
    <div>
      <RecoilTest1 />
      <RecoilTest2 />
    </div>
  );
};
