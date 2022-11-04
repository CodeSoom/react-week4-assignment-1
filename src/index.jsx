import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './App';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ), /* Provider를 통해 store를 쓸 수 있도록 내려주면 App에서 사용가능 */
  document.getElementById('app'),
);
