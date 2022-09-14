import React, { useState } from "react";
import todoListState from "../atoms/todo";
import { useSetRecoilState, useRecoilValue } from "recoil";

const TodoItemCreator = () => {
  // Recoil에 저장할 수 있게 하기
  const Items = useRecoilValue(todoListState);

  // TODO_LIST라는 atom 값에 대한 set을 할 수 있는 함수
  const setTodo = useSetRecoilState(todoListState);

  const [Input, setInput] = useState("");

  const AddTodo = () => {
    setTodo([...Items, Input]);
    setInput("");
  };
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input
        value={Input}
        onChange={onChangeInput}
        placeholder="ADD to Do!"
      ></input>
      <button onClick={AddTodo}>ADD</button>
    </>
  );
};
export default TodoItemCreator;
