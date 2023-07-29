import { selector } from "recoil";
import { testState } from "../atoms/testState";

export const doubleSelector = selector({
  key: "doubleSelector",
  get: ({ get }) => {
    const count = get(testState);
    return count * 2;
  },
});
