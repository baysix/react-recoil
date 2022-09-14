import React from "react";
import { atom, selector } from "recoil";

export const githubInfoState = atom({
  key: "githubInfomation",
  default: { users: "", repo: "" },
});

export const getStars = selector({
  key: "get/github-repo-stars",
  get: async ({ get }) => {
    const { users, repo } = get(githubInfoState);
    if (!users || !repo) return;
    const url = `https://api.github.com/repos/${users}/${repo}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data?.stargazers_count;
    } catch (err) {
      throw Error("잘못된 깃허브 정보입니다!!");
    }
  },
});
