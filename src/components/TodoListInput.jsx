import React from "react";

const TodoListInput = ({ HandleAddTodo }) => {
  return (
    <form onSubmit={HandleAddTodo}>
      <input name="todo" type="text" />
      <button type="submit">Add</button>
    </form>
  );
};
export default TodoListInput;
