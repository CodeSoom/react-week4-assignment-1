import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('renders input value', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          title: 'New task',
        },
      };

      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe(/New task/);
    });
  });
});
