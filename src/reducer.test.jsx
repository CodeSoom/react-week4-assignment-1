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
          title: 'New title',
        },
      };

      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('New title');
    });
  });
});
