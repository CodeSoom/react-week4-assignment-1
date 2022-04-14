import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes state task title', () => {
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

      it('clears task title after appends a new task', () => {
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
    context('when existed task ID', () => {
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

    context('when not existed task ID', () => {
      it("doesn't work", () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
