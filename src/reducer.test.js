import reducer from './reducer';

describe('reducer는', () => {
  it('새로운 할 일을 추가한다.', () => {
    const preveState = {
      taskTitle: 'New Task',
      tasks: [],
    };

    const state = reducer(preveState, { type: 'addNewTask' });

    expect(state.taskTitle).toBe('');
    expect(state.tasks).toHaveLength(1);
  });

  it('입력된 인풋을 반영한다.', () => {
    const preveState = {
      taskTitle: '',
    };

    const state = reducer(preveState, {
      type: 'updateInput',
      payload: { taskTitle: '누워있기' },
    });

    expect(state.taskTitle).toBe('누워있기');
  });

  it('완료된 일을 삭제한다.', () => {
    const preveState = {
      tasks: [
        { id: 100, title: '밥먹기' },
        { id: 101, title: '누워있기' },
      ],
    };

    const state = reducer(preveState, {
      type: 'deleteCompleteTask',
      payload: { id: 100 },
    });
    expect(state.tasks).toHaveLength(1);
  });

  it('입력이 공백이면 추가하지 않는다.', () => {
    const preveState = {
      taskTitle: '',
      tasks: [],
    };
    const state = reducer(preveState, { type: 'addNewTask' });

    expect(state.tasks).toHaveLength(0);
  });
});
