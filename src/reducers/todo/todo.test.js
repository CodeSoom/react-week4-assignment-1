import todoReducer from './index';

describe('todoReducer', () => {
  it('기존 상태와 task를 추가하는 action을 전달하면 tasks에 task가 추가된 새로운 상태를 반환합니다.', () => {
    const action = { type: 'ADD_TODO', payload: { title: 'foo' } };
    const prevState = todoReducer();
    const nextState = todoReducer(prevState, action);

    expect(prevState.tasks).toHaveLength(0);
    expect(nextState.tasks).toHaveLength(1);
  });
});
