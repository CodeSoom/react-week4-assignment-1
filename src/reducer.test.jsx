import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('새로운 타이틀로 바뀜', () => {
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

    context('할 일이 적혀있을 때', () => {
      it('새로운 할 일이 추가됨', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('입력창의 할 일이 빔', () => {
        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('할 일이 안 적혀있을 때', () => {
      it('작동하지 않음', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('할 일 ID가 존재할 때', () => {
      it('할 일을 삭제함', () => {
        const state = reducer({
          tasks: [{ id: 1, title: 'Task' }],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('할 일 ID가 존재 안 할 때', () => {
      it('동작하지 않음', () => {
        const state = reducer({
          tasks: [{ id: 1, title: 'Task' }],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  describe('넘겨주는 값이 없을 때', () => {
    it('', () => {
      const state = reducer();

      expect(state.taskTitle).toBe('');
    });
  });
});
