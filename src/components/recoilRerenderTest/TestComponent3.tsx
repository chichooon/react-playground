import { useRecoilState } from "recoil";
import { recoilTestState } from "../../states/atoms/recoilTestState";

export const TestComponent3 = () => {
  useRecoilState(recoilTestState);
  console.log("TestComponent3 Rerendered");
  return <div>This is TestComponent3</div>;
};
