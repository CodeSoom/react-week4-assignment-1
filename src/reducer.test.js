import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

/*
TODO
- update task title
- add task
- delete task
*/

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    const previousState = {
      newId: 100,
      taskTitle: '',
      tasks: [],
    };
    it('returns new state with new task title', () => {
      const state = reducer(previousState, updateTaskTitle('new-title'));

      expect(state.taskTitle).toBe('new-title');
    });
  });

  describe('addTask', () => {
    const previousState = {
      newId: 100,
      taskTitle: '',
      tasks: [],
    };
    it('adds new task', () => {
      const state = reducer(previousState, addTask());

      expect(state.tasks).toHaveLength(1);
    });
  });

  describe('deleteTask', () => {
    const previousState = {
      newId: 100,
      taskTitle: '',
      tasks: [
        { id: 1, taskTitle: 'task to be deleted' },
      ],
    };
    it('deletes new task', () => {
      const state = reducer(previousState, deleteTask(1));

      expect(state.tasks).toHaveLength(0);
    });
  });
});
