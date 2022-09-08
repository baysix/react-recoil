import { atom, selector } from "recoil";

export let textState = atom({
  key: "textState",
  default: "",
});

export let charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text;
  },
});
