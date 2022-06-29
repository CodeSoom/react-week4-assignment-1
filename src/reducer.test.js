import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('taskTitle이 변경된다.', () => {
      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'New Task',
        },
      };

      const newState = reducer({
        taskTitle: '',
      }, action);

      expect(newState).toHaveProperty('taskTitle', 'New Task');
    });
  });
});
