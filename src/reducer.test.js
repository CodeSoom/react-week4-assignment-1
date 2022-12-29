import reducer from './reducer';
import { updateTaskTitle } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns updated task title', () => {
      const state = reducer(
        {
          taskTitle: '',
        },
        updateTaskTitle('코드숨 과제')
      );

      expect(state.taskTitle).toBe('코드숨 과제');
    });
  });
});
