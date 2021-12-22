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
        }
      };

      expect(state.taskTitle).toBe('새로 할 일');
    });
  });
});
