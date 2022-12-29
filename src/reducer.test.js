import reducer from './reducer';
import { updateTaskTitle } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns updated task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: '코드숨 과제',
        },
      };

      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('코드숨 과제');
    });
  });
});
