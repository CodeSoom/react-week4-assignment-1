describe('reducer', () => {
  function reducer(state, action) {
    const { type, payload } = action;

    if (type === 'updateTaskTitle') {
      const { taskTitle } = payload;
      return ({
        ...state,
        taskTitle,
      });
    }

    if (type === 'addTask') {
      const { newId, tasks } = state;
      const { newTitle } = payload;
      return ({
        ...state,
        newId: newId + 1,
        taskTitle: '',
        tasks: [...tasks, { id: newId + 1, title: newTitle }],
      });
    }

    return state;
  }

  it('should update task title', () => {
    const previousState = {
      newId: 1,
      taskTitle: '',
      tasks: [{
        id: 0,
        title: '일찍 잠들기',
      }],
    };

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
    const previousState = {
      newId: 1,
      taskTitle: '',
      tasks: [{
        id: 1,
        title: '일기 쓰기',
      }],
    };

    const action = {
      type: 'addTask',
      payload: {
        newTitle: '여행 가기',
      },
    };

    const state = reducer(previousState, action);

    expect([{ id: 1, title: '일기 쓰기' }, { id: 2, title: '여행 가기' }]).toEqual(expect.arrayContaining(state.tasks));
  });
});
