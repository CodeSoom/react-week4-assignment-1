import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    it('returns new state with a new task', () => {
      const state = reducer({
        taskTitle: 'New Task',
        tasks: [],
      }, addTask());

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('New Task');
    });

    it('returns new state with blank task title', () => {
      const state = reducer({
        taskTitle: 'New Task',
        tasks: [],
      }, addTask());

      expect(state.taskTitle).toBe('');
    });
  });
});
