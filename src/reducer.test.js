import { updateTaskTitle } from './actions';

import reducer from './reducer';

describe('reducer', () => {
  describe('taskTitle 변경을 시도한다', () => {
    it('taskTitle이 변경이된다', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('새로운 할일이다!'));

      expect(state.taskTitle).toBe('새로운 할일이다!');
    });
  });
});
