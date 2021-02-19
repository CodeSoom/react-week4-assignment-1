import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  context('without registerd action type', () => {
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

  context('with registered action type', () => {
    describe('updateTaskTitle', () => {
      context('without previous state', () => {
        it('changes task title using initalState', () => {
          const state = reducer(undefined, updateTaskTitle('new-title'));

          expect(state.taskTitle).toBe('new-title');
        });
      });

      context('with previous state', () => {
        const previousState = {
          newId: 100,
          taskTitle: '',
          tasks: [],
        };

        it('changes task title', () => {
          const state = reducer(previousState, updateTaskTitle('new-title'));

          expect(state.taskTitle).toBe('new-title');
        });

        context('without previous state offered', () => {
          it('changes task title using initalState', () => {
            const state = reducer(undefined, updateTaskTitle('new-title'));

            expect(state.taskTitle).toBe('new-title');
          });
        });
      });
    });

    describe('addTask', () => {
      context('with task title', () => {
        it('adds new task', () => {
          const previousState = {
            newId: 100,
            taskTitle: 'new-title',
            tasks: [],
          };

          const state = reducer(previousState, addTask());

          expect(state.tasks).toHaveLength(1);
        });
      });

      context('without task title', () => {
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
  });
});
