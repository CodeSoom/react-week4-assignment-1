import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('change task title', () => {
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
      it('doesn\'t work', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    function reducerDeleteTask(deleteId) {
      return reducer({
        tasks: [
          { id: 1, title: 'Task' },
        ],
      }, deleteTask(deleteId));
    }

    context('with existed task ID', () => {
      it('remove a task from tasks', () => {
        const state = reducerDeleteTask(1);

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it('remove a task from tasks', () => {
        const state = reducerDeleteTask(2);

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  describe('none of all', () => {
    const state = reducer({
      undefined,
    }, { type: undefined });

    it('return state and nothing change', () => {
      expect(state).toBe(state);
    });
  });
});
