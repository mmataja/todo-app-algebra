import React, { useCallback, useMemo } from "react";
import TodoListInput from "./TodoListInput";
import { VISIBILITY_TYPE } from "../constants";
import TodoListItems from "./TodoListItems";

const TodoList = ({ todoList, setTodoList, visibilityType }) => {
  const { ACTIVE, COMPLETED } = VISIBILITY_TYPE;

  const handleAddTodo = useCallback(
    (event) => {
      event.preventDefault();
      const inputValue = event.target.todo.value;
      if (!inputValue || inputValue.trim() === "") {
        alert("Molimo unesite todo");
        event.target.todo.value = "";
        return;
      }

      const newTodo = {
        id: Math.random(),
        completed: false,
        text: event.target.todo.value,
      };

      setTodoList([...todoList, newTodo]);
      event.target.todo.value = "";
    },
    [todoList, setTodoList]
  );

  const handleToggleTodo = useCallback(
    (id) => {
      const todoListCopy = [...todoList];
      const todo = todoListCopy.find((todoItem) => todoItem.id === id);
      todo.completed = !todo.completed;
      setTodoList(todoListCopy);
    },
    [todoList, setTodoList]
  );

  const handleRemoveTodo = useCallback(
    (id) => {
      const newTodos = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodos);
    },
    [todoList, setTodoList]
  );
  const handleRemoveComplete = () => {
    const findCompleted = todoList.find((item) => item.completed === true);
    if (findCompleted && visibilityType !== ACTIVE) {
      return (
        <button
          onClick={() =>
            setTodoList(todoList.filter((item) => item.completed !== true))
          }
        >
          Clear completed
        </button>
      );
    }
  };

  const getVisibleTodos = useMemo(() => {
    if (visibilityType === ACTIVE) {
      return todoList.filter((todo) => !todo.completed);
    }

    if (visibilityType === COMPLETED) {
      return todoList.filter((todo) => todo.completed);
    }

    return todoList;
  }, [visibilityType, todoList]);

  return (
    <>
      <div className="container">
        <TodoListInput HandleAddTodo={handleAddTodo} />
        {todoList.length > 0 ? (
          <TodoListItems
            getVisibleTodos={getVisibleTodos}
            HandleToggleTodo={handleToggleTodo}
            HandleRemoveTodo={handleRemoveTodo}
          />
        ) : null}
      </div>
      <div className="container clear-button">{handleRemoveComplete()}</div>
    </>
  );
};
export default TodoList;
