import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('새로운 타이틀로 바뀜', () => {
      const previousState = {
        taskTitle: '',
      };
      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'New Title',
        },
      };

      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('New Title');
    });
  });
});
