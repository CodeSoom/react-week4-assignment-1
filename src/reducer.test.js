import reducer from './reducer';

import { updateTaskTitle, updateTaskTitleAction } from './actions/updateTaskTitle';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes new task title at first time', () => {
      const state = reducer(undefined, updateTaskTitleAction('new task'))(updateTaskTitle);

      expect(state.taskTitle).toBe('new task');
    });
  });
});
