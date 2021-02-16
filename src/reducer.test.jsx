describe('reducer', () => {
  it('should update task title', () => {
    const reducer = jest.fn((state, action) => {
      const { payload } = action;
      const { taskTitle } = payload;
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
      payload: {
        taskTitle: '늦게 잠들기',
      },
    };

    const state = reducer(previousState, action);

    expect(state.taskTitle).toBe('늦게 잠들기');
  });

  it('should add task', () => {
    expect([{ id: 1, title: '일기 쓰기' }, { id: 2, title: '여행 가기' }]).toEqual(expect.arrayContaining(state.tasks));
  });
});
