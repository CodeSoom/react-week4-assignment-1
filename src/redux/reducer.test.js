import { addTask, deleteTask, updateTaskTitle } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with a new task title', () => {
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

    context('with taskTitle', () => {
      it('tasks에 새 task 추가', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('새 task추가 후 taskTitle 클리어', () => {
        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('with taskTitle', () => {
      it('아무일도 일어나지 않는다.', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with exist task ID', () => {
      it('tasks에서 task 삭제', () => {
        const state = reducer({
          tasks: [{
            id: 1, title: 'Task',
          }],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without exist task ID', () => {
      it("doesn't work", () => {
        const state = reducer({
          tasks: [{
            id: 1, title: 'Task',
          }],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
