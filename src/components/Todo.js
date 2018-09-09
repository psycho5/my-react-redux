import React from "react";
import { PropTypes } from "prop-types";

const Todo = ({ todo, onTodoClick }) => (
  <li key={todo.id} onClick={() => onTodoClick(todo.id)}>
    {todo.text}
  </li>
);

export default Todo;

Todo.propTypes = {
  todo: PropTypes.object,
  onTodoClick: PropTypes.func
};
