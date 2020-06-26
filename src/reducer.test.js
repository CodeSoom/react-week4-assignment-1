import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('taskTitle 값이 변화한다.', () => {
      const previousState = { taskTitle: '' };

      const state = reducer(previousState, updateTaskTitle('new title'));

      expect(state.taskTitle).toBe('new title');
    });
  });

  describe('addTask', () => {
    it('task가 추가된다.', () => {
      const previousState = { tasks: [] };

      const state = reducer(previousState, addTask());

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].id).not.toBeUndefined();
      expect(state.tasks[0].title).toHaveLength(1);
    });
  });
});
