import reducer from './reducer';

import {
  updateTaskTitle,
} from './actions';

/*
TODO
- update task title =>
*/

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    const previousState = {
      newId: 100,
      taskTitle: '',
      tasks: [],
    };
    it('returns new state with new task title', () => {
      const state = reducer(previousState, updateTaskTitle('new-title'));

      expect(state.taskTitle).toBe('new-title');
    });
  });
});
