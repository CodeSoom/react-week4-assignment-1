import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes the task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle({ taskTitle: 'New Title' }));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask({ taskTitle }) {
      return reducer({
        newId: 100,
        taskTitle,
        tasks: [],
      }, addTask());
    }

    context('with task title', () => {
      it('adds a new task', () => {
        const state = reduceAddTask({ taskTitle: 'New Task' });

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clears the task title', () => {
        const state = reduceAddTask({ taskTitle: 'New Task' });

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it('does nothing', () => {
        const state = reduceAddTask({ taskTitle: '' });

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    function reduceDeleteTask({ id }) {
      return reducer({
        tasks: [
          { id: 1, title: 'Task' },
        ],
      }, deleteTask({ id }));
    }

    context('when task ID exists', () => {
      it('removes the task from tasks', () => {
        const state = reduceDeleteTask({ id: 1 });

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('when task ID doesn\'t exist', () => {
      it('does nothing', () => {
        const state = reduceDeleteTask({ id: 100 });

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  describe('other actions', () => {
    const someFunction = jest.fn(({ id, taskTitle }) => ({
      type: 'someFunction',
      payload: {
        id,
        taskTitle,
      },
    }));

    it('doesn\'t change initial state', () => {
      const state = reducer(undefined, someFunction({ id: 101, taskTitle: 'New Title' }));

      expect(state.newId).toBe(100);
      expect(state.taskTitle).toBe('');
      expect(state.tasks).toHaveLength(0);
    });
  });
});
