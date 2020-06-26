describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('taskTitle 값이 변화한다.', () => {
      const previousState = { taskTitle: '' };

      const action = {
        type: 'updateTaskTitle',
        payload: { taskTitle: 'new title' },
      };

      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('new title');
    });
  });
});
