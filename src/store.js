import { createStore } from 'redux';

import reducer from './reducer';

const store = createStore(reducer);

export default store;

// reducer - 현 상태를 새로운 상태로 바꿔주는데 쓰는 것
