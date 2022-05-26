import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('state의 taskTitle 값이 New Title로 바뀐다.', () => {
      const state = reducer({
        taskTitle: '',
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
          tasks: [{ id: 1, title: '할 일1' }],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });
    context('tasks에 존재하지 않는 id를 삭제하면', () => {
      it('state의 tasks 값이 삭제되지 않는다.', () => {
        const state = reducer({
          tasks: [{ id: 1, title: '할 일1' }],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
