import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
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
    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clears task title', () => {
        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("doesn't change the tasks", () => {
        const taskTitle = '';
        const tasks = [];

        const originLength = tasks.length;

        const state = reduceAddTask('');

        expect(state.taskTitle).toBe(taskTitle);
        expect(state.tasks.length).toBe(originLength);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it("doesn't change the tasks", () => {
        const tasks = [
          { id: 1, title: 'Task' },
        ];

        const originLength = tasks.length;

        const state = reducer({
          tasks,
        }, deleteTask(100));

        expect(state.tasks.length).toBe(originLength);
      });
    });
  });

  describe('Exception', () => {
    context('with invalid action', () => {
      it('returns the previous state', () => {
        const previousState = {
          tasks: [
            { id: 1, title: 'Task' },
          ],
          taskTitle: 'New Title',
        };

        const state = reducer(previousState, {
          type: 'invalid',
        });

        expect(state.taskTitle).toBe(previousState.taskTitle);
        expect(state.tasks[0].id).toBe(previousState.tasks[0].id);
        expect(state.tasks[0].title).toBe(previousState.tasks[0].title);
      });
    });

    context('with empty state', () => {
      it('returns the initial state', () => {
        const state = reducer(undefined, { type: '' });

        expect(state.taskTitle).toBe('');
        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
