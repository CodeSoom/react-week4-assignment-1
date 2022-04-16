import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore((state, action) => reducer({ state, action }));

export default store;
