import reducer from './reducer';

import {
  updateTaskTitle,
} from './action';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('텍스트 입력', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('고양이 밥주기'));

      expect(state.taskTitle).toBe('고양이 밥주기');
    });
  });
});
