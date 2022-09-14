import React from "react";
import TodoItemCreator from "./TodoItemCreator";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <>
      <TodoList />
      <br />
      <TodoItemCreator />
    </>
  );
};
export default Todo;
