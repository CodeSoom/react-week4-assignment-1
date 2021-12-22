import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const previousState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };

      const state = reducer(previousState, updateTaskTitle('new task'));

      expect(state.taskTitle).toBe('new task');
    });
  });

  describe('addTask', () => {
    it('adds a new task to tasks', () => {
      const previousState = {
        newId: 100,
        taskTitle: 'new task',
        tasks: [],
      };

      const state = reducer(previousState, addTask());

      expect(state.tasks[0].title).toBe('new task');
      expect(state.tasks).toHaveLength(1);
    });
  });

  describe('deleteTask', () => {
    it('removes a task from tasks', () => {
      const previousState = {
        newId: 100,
        taskTitle: '',
        tasks: [
          { id: 1, title: 'first task' },
        ],
      };

      const state = reducer(previousState, deleteTask(1));

      expect(state.tasks).toHaveLength(0);
    });
  });
});
