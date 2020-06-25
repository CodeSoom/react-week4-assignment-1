import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('should return new state with new task title', () => {
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

  describe('addTask', () => {
    it('should return new state with a new task', () => {
      const previousState = {
        taskTitle: '',
        task: [],
      };

      const action = {
        type: 'addTask',
        payload: {
          taskTitle: 'New Title',
          tasks: ['New Title'],
        },
      };

      const state = reducer(previousState, action);

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('New Title');
    });
  });
});
