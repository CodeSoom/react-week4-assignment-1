import { createStore } from 'redux';
import reducer from './reducer';

// store는 reducer를 통해 상태를 관리
const store = createStore(reducer);

export default store;
