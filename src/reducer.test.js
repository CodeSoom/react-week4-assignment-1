import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes new taskTitle', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle = '') {
      return reducer({
        newId: 100,
        taskTitle,
        tasks: [],
      }, addTask());
    }

    context('with taskTitle', () => {
      it('appends with new task', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clears taskTitle', () => {
        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it('doesnt work', () => {
        const state = reduceAddTask();
        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with task ID', () => {
      it('remove task', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Delete Task' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without task ID', () => {
      it('doesnt works', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Delete Task' },
          ],
        }, deleteTask(10));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
