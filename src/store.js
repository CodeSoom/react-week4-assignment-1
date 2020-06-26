import { createStore } from 'react';

import reducer from './reducer';

const store = createStore(reducer);

export default store;
