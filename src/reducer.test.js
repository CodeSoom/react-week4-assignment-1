import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('New Title'));
      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    it('returns new state with a new task', () => {
      const state = reducer({
        taskTitle: 'New Task',
        tasks: [],
      }, addTask());

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('New Task');
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
      it('clear task title', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });
    });

    context('without task title', () => {
      it('clear task title', () => {
        const state = reduceAddTask('');
        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('existed task', () => {
      it('remove the task', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
