import React from "react";
import { PropTypes } from "prop-types";

import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
      // completed: PropTypes.boolean
    })
  ),
  onTodoClick: PropTypes.func
};

export default TodoList;
