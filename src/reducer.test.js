import { changeTitle } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('changeTitle', () => {
    it('새로운 타이틀로 변경함', () => {
      const initialState = {
        taskTitle: '',
      };
      const state = reducer(initialState, changeTitle('newTitle'));

      expect(state.taskTitle).toBe('newTitle');
    });
  });
  describe('addTask', () => {

  });
  describe('deleteTask', () => {

  });
});
