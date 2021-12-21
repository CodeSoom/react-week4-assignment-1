import todoReducer, { initialState } from './index';

describe('todoReducer', () => {
  it('기존 상태와 task를 추가하는 action을 전달하면 tasks에 task가 추가된 새로운 상태를 반환합니다.', () => {
    const action = { type: 'ADD_TODO', payload: { title: 'foo' } };

    const nextState = todoReducer(initialState, action);

    expect(nextState.tasks).toHaveLength(1);
  });

  it('tasks에 task를 추가할 때 새로운 id를 함께 추가합니다.', () => {
    const action1 = { type: 'ADD_TODO', payload: { title: 'foo1' } };
    const action2 = { type: 'ADD_TODO', payload: { title: 'foo2' } };
    const idSet = new Set();

    const state1 = todoReducer(initialState, action1);
    const state2 = todoReducer(state1, action2);

    state2.tasks.forEach((task) => idSet.add(task.id));
    expect(state2.tasks.length).toBe(idSet.size);
  });
});
