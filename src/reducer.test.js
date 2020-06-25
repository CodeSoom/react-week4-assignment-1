import reducer from './reducer';

describe('reducer', () => {
  context('updateTaskTitle', () => {
    it('taskTitle을 바꾼다.', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'New Task',
        },
      };

      const newState = reducer(previousState, action);
      expect(newState.taskTitle).toBe('New Task');
    });
  });
});
