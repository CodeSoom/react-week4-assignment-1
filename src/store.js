import { createStore } from 'redux';

import reducer from './reducer';

// store를 만든다.
const store = createStore(reducer);

export default store;
