import { createStore } from 'redux';
import reudcer from './reducer';

const store = createStore(reudcer, {});

export default store;
