import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: 'New Task',
      };

      const newState = reducer(previousState, action);

      expect(newState.taskTitle).toBe('New Task');
    });
  });
});
