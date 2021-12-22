import todoReducer, { initialState } from './index';
import {
  addTask,
  completeTask,
} from '../../actions/todo';

describe('todoReducer', () => {
  it('reducer에 아무값도 전달하지 않으면 최초 상태를 반환합니다.', () => {
    const state = todoReducer();

    expect(state).toEqual(initialState);
  });

  it('action을 전달하지 않으면 이전 상태를 반환합니다.', () => {
    const prevState = todoReducer(initialState);
    const nextState = todoReducer(prevState);

    expect(nextState).toEqual(prevState);
  });

  describe('addTask action', () => {
    it('addTask에 title을 전달하면 tasks에 task가 추가된 새로운 상태를 반환합니다.', () => {
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
  });

  describe('completeTask action', () => {
    it('completeTask action에 기존 상태와 task의 id를 전달하면 tasks에서 해당 task를 제거한 새로운 상태를 반환합니다.', () => {
      const prevState = todoReducer(initialState, addTask('foo'));
      const { id } = prevState.tasks[0];

      const nextState = todoReducer(prevState, completeTask(id));

      expect(nextState.tasks.find((task) => task.id === id)).toBeUndefined();
    });

    it('completeTask action에 기존 상태와 존재하지 않는 task의 is를 전달하면 이전 상태를 반환합니다.', () => {
      const prevState = todoReducer(initialState);
      const nextState = todoReducer(prevState, completeTask(-1));

      expect(nextState).toEqual(prevState);
    });
  });
});
