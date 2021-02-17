import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: '홈트하기',
        },
      };

      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('홈트하기');
    });
  });
});
