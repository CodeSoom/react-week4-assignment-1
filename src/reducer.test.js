import reducer from './reducer';

import {
  changeTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  context('without state or action', () => {
    it('returns state', () => {
      const initialState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };

      expect(reducer()).toEqual(initialState);
    });
  });

  context('without action', () => {
    it('returns state', () => {
      const previousState = {
        taskTitle: '놀기',
        tasks: [],
      };

      const state = reducer(previousState);

      expect(state).toBe(previousState);
    });
  });

  context('with action', () => {
    describe('changeTaskTitle', () => {
      it('changes task title', () => {
        const previousState = {
          taskTitle: '놀기',
          tasks: [],
        };

        const state = reducer(
          previousState,
          changeTaskTitle('New title'),
        );

        expect(state.taskTitle).toBe('New title');
      });
    });

    describe('addTask', () => {
      function reduceAddTask(taskTitle) {
        return reducer(
          {
            newId: 1,
            taskTitle,
            tasks: [],
          },
          addTask(),
        );
      }

      context('with task title', () => {
        it('adds a new task', () => {
          const state = reduceAddTask('쉬기');

          expect(state.tasks).toHaveLength(1);
          expect(state.tasks[0].id).not.toBeUndefined();
          expect(state.tasks[0].title).toBe('쉬기');
        });

        it('resets taskTitle', () => {
          const state = reduceAddTask('쉬기');

          expect(state.taskTitle).toBe('');
        });
      });

      context('without task title', () => {
        it('does not add a new task', () => {
          const state = reduceAddTask('');

          expect(state.tasks).toHaveLength(0);
        });
      });
    });

    describe('deleteTask', () => {
      context('with a valid task id', () => {
        it('deletes a completed task', () => {
          const previousState = {
            tasks: [
              {
                id: 1,
                title: '쉬기',
              },
              {
                id: 2,
                title: '놀기',
              },
            ],
          };

          const state = reducer(
            previousState,
            deleteTask(1),
          );

          expect(state.tasks).toHaveLength(1);
        });
      });

      context('without a valid task id', () => {
        it('nothing happens', () => {
          const previousState = {
            tasks: [
              {
                id: 1,
                title: '쉬기',
              },
              {
                id: 2,
                title: '놀기',
              },
            ],
          };

          const state = reducer(
            previousState,
            deleteTask(3),
          );

          expect(state.tasks).toHaveLength(2);
        });
      });
    });
  });
});
