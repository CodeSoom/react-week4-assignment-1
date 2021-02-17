import { addTask, deleteTask, updateTaskTitle } from './action';
import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('홈트하기'));

      expect(state.taskTitle).toBe('홈트하기');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer({
        taskTitle,
        tasks: [],
        newId: 100,
      }, addTask());
    }

    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('New Task');
        expect(state.tasks[0].id).not.toBeUndefined();
      });

      it('clears task title', () => {
        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("doesn't work", () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    it('returns new state with a new task', () => {
      const state = reducer({
        tasks: [{ id: 1, title: 'Task-1' }],
      }, deleteTask(1));

      expect(state.tasks).toHaveLength(0);
    });
  });
});
