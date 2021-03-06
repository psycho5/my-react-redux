import { combineReducers } from "redux";
import byId, * as fromById from "./byId";
import createList, * as fromList from "./createList";

// import todo from "./todo";

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, todo(undefined, action)];
//     case "TOGGLE_TODO":
//       return state.map(t => todo(t, action));
//     default:
//       return state;
//   }
// };

// const byId = (state = {}, action) => {
//   switch (action.type) {
//     // case "ADD_TODO":
//     // case "TOGGLE_TODO":
//     //   return {
//     //     ...state,
//     //     [action.id]: todo(state[action.id], action)
//     //   };
//     case "RECEIVE_TODOS":
//       const nextState = { ...state };
//       action.response.forEach(todo => {
//         nextState[todo.id] = todo;
//       });
//       return nextState;
//     default:
//       return state;
//   }
// };

// const allIds = (state = [], action) => {
//   if (action.filter !== "all") {
//     return state;
//   }
//
//   switch (action.type) {
//     // case "ADD_TODO":
//     //   return [...state, action.id];
//     case "RECEIVE_TODOS":
//       return action.response.map(todo => todo.id);
//     default:
//       return state;
//   }
// };
//
// const activeIds = (state = [], action) => {
//   if (action.filter !== "active") {
//     return state;
//   }
//
//   switch (action.type) {
//     // case "ADD_TODO":
//     //   return [...state, action.id];
//     case "RECEIVE_TODOS":
//       return action.response.map(todo => todo.id);
//     default:
//       return state;
//   }
// };
//
// const completedIds = (state = [], action) => {
//   if (action.filter !== "completed") {
//     return state;
//   }
//
//   switch (action.type) {
//     // case "ADD_TODO":
//     //   return [...state, action.id];
//     case "RECEIVE_TODOS":
//       return action.response.map(todo => todo.id);
//     default:
//       return state;
//   }
// };

// const idsByFilter = combineReducers({
//   all: allIds,
//   active: activeIds,
//   completed: completedIds
// });

const listByFilter = combineReducers({
  all: createList("all"),
  active: createList("active"),
  completed: createList("completed")
});

const todos = combineReducers({
  byId,
  // allIds
  // idsByFilter,
  listByFilter
});

export default todos;

// const getAllTodos = state => state.allIds.map(id => state.byId[id]);

// Selector function in reducer terminology.
// export const getVisibleTodos = (state, filter) => {
//   const allTodos = getAllTodos(state);
//
//   switch (filter) {
//     case "all":
//       return allTodos;
//     case "completed":
//       return allTodos.filter(t => t.completed);
//     case "active":
//       return allTodos.filter(t => !t.completed);
//     default:
//       throw new Error(`Unknown filter: ${filter}`);
//   }
// };

export const getVisibleTodos = (state, filter) => {
  // const ids = state.idsByFilter[filter];
  const ids = fromList.getIds(state.listByFilter[filter]);
  // return ids.map(id => state.byId[id]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);
