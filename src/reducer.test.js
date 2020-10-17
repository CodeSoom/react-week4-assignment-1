import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('undefined action', () => {
    it("doesn't work", () => {
      const state = reducer();

      expect(state.newId).toBe(100);
      expect(state.taskTitle).toBe('');
      expect(state.tasks.length).toBe(0);
    });
  });
  describe('updateTaskTitle', () => {
    it('changes a task title', () => {
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

      it('clears task title in inputbox', () => {
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

  describe('deleteTaskTitle', () => {
    context('with existing task ID', () => {
      it('removes a task from tasks', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existing task ID', () => {
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
