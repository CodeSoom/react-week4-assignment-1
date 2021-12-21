import todoReducer, { initialState } from './index';
import {
  addTask,
  completeTask,
} from '../../actions/todo';

describe('todoReducer', () => {
  it('기존 상태와 task를 추가하는 action을 전달하면 tasks에 task가 추가된 새로운 상태를 반환합니다.', () => {
    const title = 'foo';

    const nextState = todoReducer(initialState, addTask(title));

    expect(nextState.tasks).toHaveLength(1);
    expect(nextState.tasks[0].title).toBe(title);
  });

  it('tasks에 task를 추가할 때 새로운 id를 함께 추가합니다.', () => {
    const idSet = new Set();

    const state1 = todoReducer(initialState, addTask('foo1'));
    const state2 = todoReducer(state1, addTask('foo2'));

    state2.tasks.forEach((task) => idSet.add(task.id));
    expect(state2.tasks.length).toBe(idSet.size);
  });

  it('기존 상태와 task의 id를 갖는 삭제 action을 전달하면 tasks에서 해당 task를 제거한 새로운 상태를 반환합니다.', () => {
    const prevState = todoReducer(initialState, addTask('foo'));
    const { id } = prevState.tasks[0];

    const nextState = todoReducer(prevState, completeTask(id));

    expect(nextState.tasks.find((task) => task.id === id)).toBeUndefined();
  });
});
