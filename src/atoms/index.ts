import { atom } from "recoil";

export const menuAtom = atom({
  key: "menuAtom",
  default: false,
});

export const userLocation = atom({
  key: "userLocationAtom",
  default: {},
});
