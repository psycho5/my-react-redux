import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addTodo } from "../actions";

let AddTodo = ({ onAddTodoClick }) => {
  let input;

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          onAddTodoClick(input.value);
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

AddTodo = connect(
  null,
  { onAddTodoClick: addTodo }
)(AddTodo);

AddTodo.propTypes = {
  onAddTodoClick: PropTypes.func
};

export default AddTodo;
