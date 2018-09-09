import { createStore, applyMiddleware } from "redux";
// import promise from "redux-promise";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
// import throttle from "lodash/throttle";

import todoApp from "./reducers";
// import { loadState, saveState } from "./localStorage";

// const thunk = store => next => action => {
//   typeof action === "function"
//     ? action(store.dispatch, store.getState)
//     : next(action);
// };

// const logger = store => next => {
//   if (!console.group) {
//     return next;
//   }
//
//   return action => {
//     console.group(action.type);
//     console.log("%c prev state", "color: gray", store.getState());
//     console.log("%c action", "color: blue", action);
//     const returnValue = next(action);
//     console.log("%c next state", "color: green", store.getState());
//     console.groupEnd(action.type);
//     return returnValue;
//   };
// };
//
// const promise = store => next => action => {
//   if (typeof action.then === "function") {
//     return action.then(next);
//   }
//   return next(action);
// };
//
// const wrapDispatchWithmiddlewares = (store, middlewares) => {
//   middlewares
//     .slice()
//     .reverse()
//     .forEach(
//       middleware => (store.dispatch = middleware(store)(store.dispatch))
//     );
// };

const configureStore = () => {
  // const persistedState = loadState();
  // const store = createStore(todoApp, persistedState);
  // const store = createStore(todoApp);
  // const middlewares = [promise];
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== "production") {
    // store.dispatch = addLoggingToDispatch(store);
    // middlewares.push(logger);
    middlewares.push(createLogger());
  }

  // store.subscribe(
  //   throttle(() => {
  //     saveState({
  //       todos: store.getState().todos
  //     });
  //   }, 1000)
  // );

  // store.dispatch = addPromiseSupportToDispatch(store);
  // middlewares.push(promise);
  // wrapDispatchWithmiddlewares(store, middlewares);
  // const store = createStore(todoApp, applyMiddleware(...middlewares));
  return createStore(
    todoApp,
    // persistedState
    applyMiddleware(...middlewares)
  );

  // return store;
};

export default configureStore;
