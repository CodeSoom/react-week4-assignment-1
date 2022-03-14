import { createStore } from 'redux';

import reducer from './reducer';

// 어떻게 그릴지 신경쓰지 않아도 됨

const store = createStore(reducer);
export default store;
