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
});
