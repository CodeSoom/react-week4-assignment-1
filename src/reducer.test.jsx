import reducer, { initialState } from './reducer';

import { addTask, updateTaskTitle, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const state = reducer(previousState, updateTaskTitle('new title'));
      expect(state.taskTitle).toBe('new title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer(
        {
          newId: 100,
          taskTitle,
          tasks: [],
        },
        addTask(),
      );
    }
    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask('new task');
        const { tasks } = state;

        expect(tasks.includes('new task'));
        expect(tasks).toHaveLength(1);
        expect(tasks[0].title).toBe('new task');
        expect(tasks[0].id).not.toBe(undefined);
      });

      it('clears task title', () => {
        const state = reduceAddTask('new task');
        expect(state.taskTitle).toBe('');
      });

      context('without task title', () => {
        it('does not work', () => {
          const state = reduceAddTask('');
          expect(state.tasks).toHaveLength(0);
        });
      });
    });
  });

  describe('delete task', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const state = reducer({
          tasks: [{ id: 1, title: 'task1' }],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it('dose not work', () => {
        const state = reducer({
          tasks: [{ id: 1, title: 'task1' }],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  context('undefined action type', () => {
    it('returns now state', () => {
      const previousState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };
      const undefinedAction = {
        type: 'no ation',
      };
      const state = reducer(
        previousState,
        undefinedAction,
      );

      expect(state === previousState);
    });
  });

  context('when previousState is undefined', () => {
    it('returns initialState', () => {
      const undefinedAction = {
        type: 'no ation',
      };
      const state = reducer(undefined, undefinedAction);
      expect(state === initialState);
    });
  });
});
