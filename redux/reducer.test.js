import reducer from './reducer';

import { addTask, deleteTask, updateTaskTitle } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('새로운 이름의 taskTitle을 가진 상태를 반환한다.', () => {
      const prevState = {
        taskTitle: '',
      };
      const state = reducer(prevState, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    const reduceAddTask = (taskTitle) => ({
      newId: 100,
      taskTitle,
      tasks: [],
    });

    context('taskTitle이 있는 경우', () => {
      it('새로운 상태를 추가된다.', () => {
        const state = reducer(reduceAddTask('New Tasks'), addTask());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Tasks');
        expect(state.tasks[0].id).toBe(100);
      });

      it('새로운 상태가 추가되면, taskTitle은 비워진다.', () => {
        const state = reducer(reduceAddTask('New Tasks'), addTask());

        expect(state.taskTitle).toBe('');
      });
    });

    context('taskTitle이 없는 경우', () => {
      it('새로운 상태를 추가되지 않는다.', () => {
        const state = reducer(reduceAddTask(''), addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('tasks에 있는 할일을 삭제한다', () => {
      it('tasks에서 선택된 할일을 삭제한다.', () => {
        const initialState = { tasks: [{ id: 1, title: '아무것도 안하기' }] };
        const state = reducer(initialState, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('tasks에 없는 할일을 삭제하려고 시도한다', () => {
      it('tasks에서 선택된 할일을 삭제한다.', () => {
        const initialState = { tasks: [{ id: 1, title: '아무것도 안하기' }] };
        const state = reducer(initialState, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
