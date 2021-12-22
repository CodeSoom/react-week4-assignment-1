import reducer from './reducer';

import {
  updateTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTitle', () => {
    it('update a taskTitle', () => {
      const title = 'newTitle';

      const state = reducer({
        taskTitle: '',
      }, updateTitle(title));

      expect(state.taskTitle).toBe(title);
    });
  });

  describe('addTask', () => {

  });

  describe('deleteTask', () => {

  });
});
