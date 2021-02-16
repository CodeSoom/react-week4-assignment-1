describe('reducer', () => {
  const reducer = jest.fn();

  describe('should update task title', () => {
    const previousState = [{
      newId: 100,
      taskTitle: '',
      tasks: [{
        id: 0,
        title: '일찍 잠들기',
      }],
    }];

    const action = {
      type: 'updateTaskTitle',
      payload: {
        taskTitle: '늦게 잠들기',
      },
    };

    const state = reducer(previousState, action);

    expect(state.taskTitle).toBe('늦게 잠들기');
  });
});
