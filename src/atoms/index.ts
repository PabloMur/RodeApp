import { atom } from "recoil";

export const menuAtom = atom({
  key: "menuAtom",
  default: false,
});

export const userLocation = atom({
  key: "userLocationAtom",
  default: {},
});

export const loaderAtom = atom({
  key: "loaderAtom",
  default: false,
});

export const lastListID = atom({
  key: "lastListID",
  default: "",
});
