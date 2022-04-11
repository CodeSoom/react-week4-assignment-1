import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const state = reducer(previousState, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      const previousState = {
        newId: 100,
        taskTitle,
        tasks: [],
      };

      return reducer(previousState, addTask());
    }

    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clears task title after appends a task into tasks', () => {
        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("doesn't work", () => {
        const state = reduceAddTask();

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const previousState = {
          tasks: [
            { id: 1, title: 'Task' },
          ],
        };

        const state = reducer(previousState, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it("doesn't work", () => {
        const previousState = {
          tasks: [
            { id: 1, title: 'Task' },
          ],
        };

        const state = reducer(previousState, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  describe('action type is not defined', () => {
    it('return previous state', () => {
      const previousState = {
        newId: 100,
        taskTitle: '',
        tasks: [
          { id: 1, title: 'Task' },
        ],
      };

      const state = reducer(previousState, { type: '', payload: { taskTitle: '' } });

      expect(state.newId).toBe(100);
      expect(state.taskTitle).toBe('');
      expect(state.tasks).toHaveLength(1);

      expect(state).toEqual(previousState);
    });
  });
});
