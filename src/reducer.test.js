import { updateTaskTitle } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });
});
