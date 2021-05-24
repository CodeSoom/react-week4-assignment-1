import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('updates title of task', () => {
      const state = {
        taskTitle: '',
      };

      const action = {
        type: 'UpdateTaskTitle',
        payload: {
          taskTitle: 'newTitle',
        },
      };

      const newState = reducer(state, action);

      expect(newState.taskTitle).toBe('newTitle');
    });
  });
  describe('addTask', () => {

  });
  describe('deleteTask', () => {

  });
});
