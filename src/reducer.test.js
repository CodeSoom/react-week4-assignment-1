import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('change task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reducer({
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clears task title', () => {
        const state = reducer({
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());

        expect(state.taskTitle).toBe('');
      });
    });
  });
});
