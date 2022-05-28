import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('state의 taskTitle 값이 New Title로 바뀐다.', () => {
      const state = reducer({
        newId: 2,
        taskTitle: '',
        tasks: [],
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    const reduceAddTask = (taskTitle) => reducer({
      newId: 2,
      taskTitle,
      tasks: [],
    }, addTask());

    context('taskTitle의 값이 있으면', () => {
      it('state의 tasks 값이 추가된다.', () => {
        const state = reduceAddTask('할 일2');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('할 일2');
      });

      it('taskTitle의 값이 빈값이 된다.', () => {
        const state = reduceAddTask('할 일2');

        expect(state.taskTitle).toBe('');
      });
    });

    context('taskTitle의 값이 없으면', () => {
      it('task 값이 추가되지 않는다.', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('tasks에 존재하는 id를 삭제하면', () => {
      it('state의 tasks 값이 삭제된다.', () => {
        const state = reducer({
          newId: 2,
          taskTitle: '',
          tasks: [{ id: 1, title: '할 일1' }],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });
    context('tasks에 존재하지 않는 id를 삭제하면', () => {
      it('state의 tasks 값이 삭제되지 않는다.', () => {
        const state = reducer({
          newId: 2,
          teskTitle: '',
          tasks: [{ id: 1, title: '할 일1' }],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  describe('reducer에 존재하지 않는 action type이 들어오면', () => {
    it('초기 state 값이 반환된다.', () => {
      const state = reducer({
        newId: 101,
        taskTitle: '잠자기',
        tasks: [],
      }, { type: null });

      expect(state.taskTitle).toBe('잠자기');
      expect(state.newId).toBe(101);
    });
  });

  describe('reducer에 state 값이 없으면', () => {
    it('initialState 값이 반환된다.', () => {
      const state = reducer(undefined, addTask());

      expect(state.newId).toBe(100);
      expect(state.taskTitle).toBe('');
      expect(state.tasks).toHaveLength(0);
    });
  });
});
