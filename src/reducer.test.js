describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('renders new task title', () => {
      const state = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: '새로 할 일',
        },
      };

      expect(state.taskTitle).toBe(action.payload.taskTitle);
    });
  });

  describe('addTask', () => {
    it('renders new task', () => {
      const state = {
        tasks: [],
      };

      const action = {
        type: 'addTask',
        payload: {
          tasks: [{ id: 1, title: '새로 할 일' }],
        },
      };

      expect(state.tasks).toBe(action.payload.tasks);
    });
  });

  describe('deleteTask', () => {
    it('renders new task', () => {
      const state = {
        tasks: [{ id: 1, title: '새로 할 일' }],
      };

      const action = {
        type: 'addTask',
        payload: {
          tasks: [],
        },
      };

      expect(state.tasks).toBe(action.payload.tasks);
    });
  });
});
