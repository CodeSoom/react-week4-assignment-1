import { createStore } from 'redux';

import reducer from './reducer';

// Redux action
// - type (string)
// - payload => object => { taskTitle }

const store = createStore(reducer);

export default store;
