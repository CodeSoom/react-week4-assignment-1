import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('입력한 값으로 할 일을 업데이트 한다', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer({
        newId: 100,
        taskTitle,
        tasks: [],
      }, addTask());
    }

    context('할 일이 있을 경우', () => {
      it('입력한 할 일이 랜더링된다', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('입력한 값이 초기화된다', () => {
        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('할 일이 없을 경우', () => {
      it('아무런 작동을 하지 않는다', () => {
        const state = reduceAddTask();

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('id가 있을 경우', () => {
      it('해당하는 할 일이 삭제된다', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('id가 없을 경우', () => {
      it('아무런 작동을 하지 않는다', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  describe('아무런 동작이 없는 경우', () => {
    it('아무런 일도 일어나지 않는다', () => {
      const state = reducer();

      expect(state.taskTitle).toBe('');

      expect(state.tasks).toHaveLength(0);
    });
  });
});
