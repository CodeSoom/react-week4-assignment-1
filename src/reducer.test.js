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
          id: 1,
          title: '할 일1',
        }],
      },
    });

    expect(state.newId).toBe(1);
    expect(state.taskTitle).toBe('할 일1');
    expect(state.tasks).toHaveLength(1);
  });

  it('완료한 일을 삭제합니다.', () => {
    const state = reducer({
      newId: 1,
      taskTitle: '할 일1',
      tasks: [{
        id: 1,
        title: '할 일1',
      }],
    },
    {
      type: 'deleteTask',
      payload: {
        newId: 0,
        taskTitle: '',
        tasks: [],
      },
    });

    expect(state.taskTitle).toBe('');
    expect(state.tasks).toHaveLength(0);
  });
});
