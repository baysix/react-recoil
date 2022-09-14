import React, { Suspense, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { githubInfoState } from "../atoms/apiAsync";
import Stars from "../components/getApi/Stars";

const GithubGet = () => {
  const [githubInfo, setGithubInfo] = useRecoilState(githubInfoState);
  const userRef = useRef();
  const repoRef = useRef();

  const handleClick = () => {
    const users = userRef.current.value;
    const repo = repoRef.current.value;
    const info = { users, repo };
    setGithubInfo(info);
  };

  const whoseGitHub = githubInfo.users
    ? `${githubInfo.users}의 ${githubInfo.repo}저장소`
    : "정보를 입력해주세요";

  return (
    <>
      <StyledApp>
        <div>깃헙 아이디</div>
        <input type="text" ref={userRef} />
        <div>레포지토리 이름</div>
        <input type="text" ref={repoRef} />
        <button onClick={handleClick} className="btn">
          제출하기
        </button>
        <div>{whoseGitHub}</div>
        <div>star 개수</div>
        <Suspense fallback={<div className="stars">loading...</div>}>
          <Stars className="stars" />
        </Suspense>
      </StyledApp>
    </>
  );
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 5rem;
  width: 20rem;
  height: 20rem;
  border: 1px solid black;
  .btn {
    display: block;
  }
  & > div,
  & > input,
  & > .btn {
    margin-bottom: 1rem;
  }
  .stars {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 30px;
    border: 1px solid blue;
  }
`;

export default GithubGet;
