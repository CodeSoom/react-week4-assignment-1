import reducer from './reducer';

import { updateTaskTitle, addTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const state = reducer(previousState, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    it('returns new state with a new task', () => {
      const previousState = {
        taskTitle: 'New Task',
        tasks: [],
      };

      const state = reducer(previousState, addTask());

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('New Task');
    });

    it('returns new state with a blank task title', () => {
      const previousState = {
        taskTitle: 'New Task',
        tasks: [],
      };

      const state = reducer(previousState, addTask());

      expect(state.taskTitle).toBe('');
    });
  });
});
