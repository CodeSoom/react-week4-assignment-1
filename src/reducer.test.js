import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('renders input value', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('New task'));

      expect(state.taskTitle).toBe('New task');
    });
  });

  describe('addTask', () => {
    it('renders new task', () => {
      const state = reducer({
        newId: 100,
        taskTitle: 'New task',
        tasks: [],
      }, addTask());

      expect(state.tasks).toHaveLength(1);
    });
  });
});
