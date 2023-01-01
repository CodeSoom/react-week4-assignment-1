import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import React from 'react';
import App from './App';

import store from './store';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
