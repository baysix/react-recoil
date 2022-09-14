import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import todoListState from "../atoms/todo";

const TodoList = () => {
  // Recoil 값을 가져와서 사용하기
  const Items = useRecoilValue(todoListState);
  // todoListState에 대한 set을 할 수 있는 함수
  const setItems = useSetRecoilState(todoListState);

  const DeleteTodo = (e) => {
    let newItems = Items.filter(
      (data, index) => index !== parseInt(e.target.id)
    );
    setItems(newItems);
  };

  const UpdateTodo = (e) => {
    let newtext = prompt("새로운 값을 입력하세요");
    let newItems = Items.map((data, index) => {
      if (index === parseInt(e.target.id)) {
        return newtext;
      } else return data;
    });
    setItems(newItems);
  };

  return (
    <div>
      {Items.map((data, index) => (
        <div style={{ borderStyle: "solid" }} key={index}>
          <p>{data}</p>
          <button id={index} onClick={DeleteTodo}>
            Delete
          </button>
          <button id={index} onClick={UpdateTodo}>
            Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
