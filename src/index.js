import React from 'react';
import { render }from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { throttle } from 'lodash/throttle';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import todoApp from './reducers';
import { loadState, saveState } from './services/localStorage';

const persistedState = loadState();
const store = createStore(todoApp, persistedState);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
