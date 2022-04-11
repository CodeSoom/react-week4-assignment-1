import reducer from './reducer';

import { updateTaskTitle, addTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const state = reducer(previousState, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const previousState = {
          taskTitle: 'New Task',
          tasks: [],
        };

        const state = reducer(previousState, addTask());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clears task title after appends a task into tasks', () => {
        const previousState = {
          taskTitle: 'New Task',
          tasks: [],
        };

        const state = reducer(previousState, addTask());

        expect(state.taskTitle).toBe('');
      });

      context('without task title', () => {
        it("doesn't work", () => {
          const previousState = {
            taskTitle: '',
            tasks: [],
          };

          const state = reducer(previousState, addTask());

          expect(state.tasks).toHaveLength(0);
        });
      });
    });
  });
});
