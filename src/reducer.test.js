describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('renders new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: '새로 할 일',
        },
      };

      // const state = reducer(previousState, action);

      expect(previousState.taskTitle).toBe(action.payload.taskTitle);
    });
  });

  describe('addTask', () => {
    it('renders new task', () => {
      const previousState = {
        taskTitle: '새로 할 일',
        tasks: [],
      };

      const oldLength = previousState.tasks.length;

      const action = {
        type: 'addTask',
        payload: {
          tasks: [{ id: 1, title: '새로 할 일' }],
        },
      };

      // const state = reducer(previousState, action);

      const newLength = action.payload.tasks.length;

      expect(newLength - oldLength).toBe(1);
    });
  });

  describe('deleteTask', () => {
    it('remove the task', () => {
      const previousState = {
        tasks: [{ id: 1, title: '새로 할 일' }],
      };

      const oldLength = previousState.tasks.length;

      const action = {
        type: 'deleteTask',
        payload: {
          tasks: [],
        },
      };

      // const state = reducer(previousState, action);

      const newLength = action.payload.tasks.length;

      expect(oldLength - newLength).toBe(oldLength);
    });
  });
});
