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
      expect(state.tasks[0].title).toBe('New task');
    });

    it('changes newId', () => {
      const state = reducer({
        newId: 100,
        taskTitle: 'New task',
        tasks: [],
      }, addTask());

      expect(state.newId).toBe(101);
    });

    it('cleares task title', () => {
      const state = reducer({
        newId: 100,
        taskTitle: 'New task',
        tasks: [],
      }, addTask());

      expect(state.taskTitle).toBe('');
    });
  });
});
