import reducer from './reducer';

import { updateTaskTitle, updateTaskTitleAction } from './actions/updateTaskTitle';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    context('changes new task title', () => {
      it('from initial state', () => {
        const state = reducer(undefined, updateTaskTitleAction('new task'))(updateTaskTitle);

        expect(state.taskTitle).toBe('new task');
      });
    });

    context('from previous state', () => {
      const state = reducer(
        {
          taskTitle: 'task-1',
        },
        updateTaskTitleAction('new task'),
      )(updateTaskTitle);

      expect(state.taskTitle).toBe('new task');
    });
  });
});
