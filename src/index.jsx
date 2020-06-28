import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import TodoStore from './stores';

import App from './App';

ReactDOM.render(
  <Provider store={TodoStore}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
