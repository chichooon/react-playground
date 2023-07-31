import { atom } from "recoil";

export const recoilTestState = atom<string>({
  key: "recoilTestState",
  default: "",
});
