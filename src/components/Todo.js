import React from "react";
import { PropTypes } from "prop-types";

const Todo = ({ todo, onTodoClick }) => (
  <li
    onClick={onTodoClick}
    style={{
      textDecoration: todo.completed ? "line-through" : "none"
    }}
  >
    {todo.text}
  </li>
);

export default Todo;

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onTodoClick: PropTypes.func.isRequired
};
