import { creactStore } from 'redux';

import reducer from './reducer';

const store = creactStore(reducer);

export default store;
