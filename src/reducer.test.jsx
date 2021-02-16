describe('reducer', () => {
  it('should update task title', () => {
    const reducer = jest.fn((state, action) => {
      const { taskTitle } = action;
      return ({
        ...state,
        taskTitle,
      });
    });

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
      taskTitle: '늦게 잠들기',
    };

    const state = reducer(previousState, action);

    console.log(state)

    expect(state.taskTitle).toBe('늦게 잠들기');
  });
});
