import reducer from './reducer';

import { updateTaskTitle, addTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title ', () => {
      const previousState = {
        taskTitle: '',
      };

      const state = reducer(previousState, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    it('add task ', () => {
      const previousState = {
        taskTitle: 'New Task',
        tasks: [],
      };

      const state = reducer(previousState, addTask());

      expect(state.tasks).toHaveLength(1);
    });
  });
});
