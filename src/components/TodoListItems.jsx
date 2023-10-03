import React from "react";
import {
  ListGroup,
  ListGroupItem,
  FormCheck,
  CloseButton,
} from "react-bootstrap";

const TodoListItems = ({
  getVisibleTodos,
  HandleToggleTodo,
  HandleRemoveTodo,
}) => {
  return (
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
  );
};
export default TodoListItems;
