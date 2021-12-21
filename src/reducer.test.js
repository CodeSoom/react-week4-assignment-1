import reducer from './reducer';

import {
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'New Title',
        },
      };

      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    it('returns new state with a new task', () => {
      const state = reducer({
        newId: 100,
        taskTitle: 'New Task',
        tasks: [],
      }, addTask());

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].id).not.toBeUndefined();
      expect(state.tasks[0].title).toBe('New Task');
    });
  });

  describe('deleteTask', () => {
    it('remove the task from tasks', () => {
      const state = reducer({
        tasks: [
          { id: 1, title: 'Task' },
        ],
      }, deleteTask(1));

      expect(state.tasks).toHaveLength(0);
    });
  });
});
