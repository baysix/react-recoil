import React from "react";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./pages/CharacterCounter";
import GithubGet from "./pages/GithubGet";
import Todo from "./pages/Todo";

function App() {
  return (
    <RecoilRoot>
      {/* 일반 recoil */}
      {/* <CharacterCounter /> */}

      {/* 투두리스트  recoil 예제*/}
      {/* <Todo /> */}

      {/* github 비동기 통신 예제 */}
      <GithubGet />
    </RecoilRoot>
  );
}

export default App;
