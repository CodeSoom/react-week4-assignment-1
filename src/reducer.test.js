import { updateTaskTitle } from './action';
import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('홈트하기'));

      expect(state.taskTitle).toBe('홈트하기');
    });
  });
});
