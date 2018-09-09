// import { v4 } from "node-uuid";
import { normalize } from "normalizr";
import * as schema from "./schema";
import * as api from "../api";
import { getIsFetching } from "../reducers";

// const requestTodos = filter => ({
//   type: "REQUEST_TODOS",
//   filter
// });

// const receiveTodos = (filter, response) => ({
//   type: "RECEIVE_TODOS",
//   filter,
//   response
// });

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    // type: "REQUEST_TODOS",
    type: "FETCH_TODOS_REQUEST",
    filter
  });
  return api.fetchTodos(filter).then(
    response => {
      // console.log(
      //   "normalized response: ",
      //   normalize(response, schema.arrayOfTodos)
      // );
      dispatch({
        // type: "RECEIVE_TODOS",
        type: "FETCH_TODOS_SUCCESS",
        filter,
        response: normalize(response, schema.arrayOfTodos)
      });
    },
    error =>
      dispatch({
        type: "FETCH_TODOS_FAILURE",
        filter,
        message: error.message || "Something went wrong!"
      })
  );
};

// export const addTodo = text => ({
//   type: "ADD_TODO",
//   id: v4(),
//   text
// });

export const addTodo = text => dispatch =>
  api.addTodo(text).then(response => {
    // console.log("normalized response: ", normalize(response, schema.todo));
    dispatch({
      type: "ADD_TODO_SUCCESS",
      response: normalize(response, schema.todo)
    });
  });

// export const toggleTodo = id => ({
//   type: "TOGGLE_TODO",
//   id: id
// });

export const toggleTodo = id => dispatch =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: "TOGGLE_TODO_SUCCESS",
      response: normalize(response, schema.todo)
    });
  });
