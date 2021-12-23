import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const previousState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };

      const state = reducer(previousState, updateTaskTitle('new task'));

      expect(state.taskTitle).toBe('new task');
    });
  });

  describe('addTask', () => {
    it('adds a new task to tasks', () => {
      const previousState = {
        newId: 100,
        taskTitle: 'new task',
        tasks: [],
      };

      const state = reducer(previousState, addTask());

      const { tasks } = state;

      expect(tasks[0].title).toBe('new task');
      expect(tasks).toHaveLength(1);
    });
  });

  describe('deleteTask', () => {
    context('with an existing task id', () => {
      it('removes a task from tasks', () => {
        const previousState = {
          newId: 100,
          taskTitle: '',
          tasks: [
            { id: 1, title: 'first task' },
            { id: 2, title: 'second task' },
          ],
        };

        const state = reducer(previousState, deleteTask(1));

        const { tasks } = state;

        expect(tasks).toHaveLength(1);
      });
    });

    context('with a non-existent task id', () => {
      it('removes a task from tasks', () => {
        const previousState = {
          newId: 100,
          taskTitle: '',
          tasks: [
            { id: 1, title: 'first task' },
            { id: 2, title: 'second task' },
          ],
        };

        const state = reducer(previousState, deleteTask(100));

        const { tasks } = state;

        expect(tasks).toHaveLength(2);
      });
    });
  });
});
