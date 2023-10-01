import React, { useState } from "react";
import { TodoList, TodoToggleButtons } from "./components/index";
import "./App.css";
import { VISIBILITY_TYPE } from "./constants";

const { ALL } = VISIBILITY_TYPE;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [visibilityType, setVisibilityType] = useState(ALL);

  return (
    <div className="app">
      <h1 className="mb">My Tasks</h1>

      <TodoToggleButtons
        visibilityType={visibilityType}
        setVisibilityType={setVisibilityType}
        VISIBILITY_TYPE={VISIBILITY_TYPE}
      />

      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        visibilityType={visibilityType}
        VISIBILITY_TYPE={VISIBILITY_TYPE}
      />
    </div>
  );
}

export default App;
