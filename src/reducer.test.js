import reducer from './reducer';

import {
  updateTaskTitle,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('입력 값'));

      expect(state.taskTitle).toBe('입력 값');
    });
  });
});