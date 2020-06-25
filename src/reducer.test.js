import reducer from './reducer';

import {
  updateTaskTitle,
} from './actions';

describe('reducer', () => {
  context('updateTaskTitle', () => {
    it('taskTitle을 바꿔 새로운 상태를 반환한다.', () => {
      const newState = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Task'));

      expect(newState.taskTitle).toBe('New Task');
    });
  });
});
