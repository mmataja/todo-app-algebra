import React, { useCallback, useMemo } from "react";
import TodoListInput from "./TodoListInput";
import {
  ListGroup,
  ListGroupItem,
  FormCheck,
  CloseButton,
} from "react-bootstrap";

const TodoList = ({
  todoList,
  setTodoList,
  visibilityType,
  VISIBILITY_TYPE,
}) => {
  const { ACTIVE, COMPLETED } = VISIBILITY_TYPE;

  const HandleAddTodo = useCallback(
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

  const HandleToggleTodo = useCallback(
    (id) => {
      const todoListCopy = [...todoList];
      const todo = todoListCopy.find((todoItem) => todoItem.id === id);
      todo.completed = !todo.completed;
      setTodoList(todoListCopy);
    },
    [todoList, setTodoList]
  );

  const HandleRemoveTodo = useCallback(
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
        <TodoListInput HandleAddTodo={HandleAddTodo} />
        {todoList.length > 0 ? (
          <ListGroup>
            {getVisibleTodos.map((todo) => (
              <ListGroupItem key={todo.id} className="todoItem-container">
                <div
                  onClick={() => HandleToggleTodo(todo.id)}
                  className="todoItem-checkbox"
                >
                  <FormCheck
                    id={todo.id}
                    type="checkbox"
                    checked={todo.completed}
                    readOnly
                  />
                  <span className="ml">{todo.text}</span>
                </div>
                <CloseButton
                  className="ml"
                  onClick={() => HandleRemoveTodo(todo.id)}
                />
              </ListGroupItem>
            ))}
          </ListGroup>
        ) : null}
      </div>
      <div className="container clear-button">{handleRemoveComplete()}</div>
    </>
  );
};
export default TodoList;
