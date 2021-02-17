import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    const previousState = {
      newId: 100,
      taskTitle: '',
      tasks: [],
    };

    it('changes task title', () => {
      const state = reducer(previousState, updateTaskTitle('new-title'));

      expect(state.taskTitle).toBe('new-title');
    });
  });

  describe('addTask', () => {
    it('adds new task', () => {
      const previousState = {
        newId: 100,
        taskTitle: 'new-title',
        tasks: [],
      };

      const state = reducer(previousState, addTask());

      expect(state.tasks).toHaveLength(1);
    });

    context('with empty task title', () => {
      const previousState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };

      it('does not add new task', () => {
        const state = reducer(previousState, addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    const previousState = {
      newId: 100,
      taskTitle: '',
      tasks: [
        { id: 1, taskTitle: 'task to be deleted' },
      ],
    };

    it('deletes new task', () => {
      const state = reducer(previousState, deleteTask(1));

      expect(state.tasks).toHaveLength(0);
    });
  });

  describe('unregisteredAction', () => {
    const previousState = {
      newId: 100,
      taskTitle: '',
      tasks: [],
    };

    it('does nothing', () => {
      const state = reducer(previousState, {
        type: 'unregistered',
        payload: {
          id: 100,
        },
      });

      expect(state).toEqual(previousState);
    });
  });
});
