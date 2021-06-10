import { createStore } from 'redux';
import reducer from './reducer';
// store 선언하기. 스토어 생성시 스토어에서 저장된 데이터를 다룰 리듀서가 필요함.

// 앱 상태를 보관하는 Redux 스토어를 만듭니다.
// API는 {subscribe, dispatch, getState}입니다.
const store = createStore(reducer);
export default store;
