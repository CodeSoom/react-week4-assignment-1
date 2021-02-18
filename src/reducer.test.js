import { addTask, deleteTask, updateTaskTitle } from './action';
import reducer, { initialState } from './reducer';

describe('reducer', () => {
  describe('noType', () => {
    it('returns initial state', () => {
      const state = reducer();

      expect(state).toBe(initialState);
    });
  });

  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('홈트하기'));

      expect(state.taskTitle).toBe('홈트하기');
    });
  });

  describe('addTask', () => {
    function addTaskReducer(taskTitle) {
      return reducer({
        taskTitle,
        tasks: [],
        newId: 100,
      }, addTask());
    }

    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = addTaskReducer('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('New Task');
        expect(state.tasks[0].id).not.toBeUndefined();
      });

      it('clears task title', () => {
        const state = addTaskReducer('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("doesn't work", () => {
        const state = addTaskReducer('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('remove the task from task', () => {
        const state = reducer({
          tasks: [{ id: 1, title: 'Task-1' }],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it("doesn't work", () => {
        const state = reducer({
          tasks: [{ id: 1, title: 'Task-1' }],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
