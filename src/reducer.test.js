import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: '새로운 할 일',
        },
      };

      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('새로운 할 일');
    });
  });
});
