import reducer from './reducer';

describe('reducer', () => {
  it('사용자 입력을 반영합니다.', () => {
    const state = reducer({ taskTitle: '' },
      {
        type: 'updateTaskTitle',
        payload: { taskTitle: '할 일' },
      });

    expect(state.taskTitle).toBe('할 일');
  });

  it('할 일을 추가합니다.', () => {
    const state = reducer({
      newId: 0,
      taskTitle: '',
      tasks: [],
    },
    {
      type: 'addTask',
      payload: {
        newId: 1,
        taskTitle: '할 일1',
        tasks: [{
          id: this.newId,
          title: this.taskTitle,
        }],
      },
    });

    expect(state.taskTitle).toBe('할 일1');
    expect(state.tasks).toHaveLength(1);
  });
});
