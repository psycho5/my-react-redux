import React from "react";
import { PropTypes } from "prop-types";

const Todo = ({ todo, onTodoClick }) => (
  <li key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
);

export default Todo;

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onTodoClick: PropTypes.func.isRequired
};
