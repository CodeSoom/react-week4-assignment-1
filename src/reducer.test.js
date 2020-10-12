import reducer from './reducer';

import { updateTaskTitle } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const newState = reducer(previousState, updateTaskTitle('New Task'));

      expect(newState.taskTitle).toBe('New Task');
    });
  });
});
