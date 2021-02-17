import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
} from './actions';

/*
TODO
- update task title
- add task
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
});
