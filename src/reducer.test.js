import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    context('changes new task title', () => {
      it('from initial state', () => {
        const state = reducer(undefined, updateTaskTitle('new task'));

        expect(state.taskTitle).toBe('new task');
      });
    });

    context('from previous state', () => {
      const state = reducer(
        {
          taskTitle: 'task-1',
        },
        updateTaskTitle('new task'),
      );

      expect(state.taskTitle).toBe('new task');
    });
  });

  describe('addTask', () => {
    context('with task title', () => {
      it('added into tasks', () => {
        const state = reducer(
          {
            newId: 1,
            taskTitle: 'new task',
            tasks: [],
          },
          addTask(),
        );

        expect(state.tasks).toHaveLength(1);
      });
    });

    context('without task title', () => {
      it("doesn't work", () => {
        const state = reducer(
          {
            newId: 1,
            taskTitle: '',
            tasks: [],
          },
          addTask(),
        );

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed id', () => {
      it('remove from tasks', () => {
        const state = reducer(
          {
            tasks: [
              { id: 1, title: 'task-1' },
              { id: 2, title: 'task-2' },
            ],
          },
          deleteTask(1),
        );

        expect(state.tasks).toHaveLength(1);
      });
    });

    context('without existed id', () => {
      it('doesn\'t work', () => {
        const state = reducer(
          {
            tasks: [
              { id: 1, title: 'task-1' },
              { id: 2, title: 'task-2' },
            ],
          },
          deleteTask(5),
        );

        expect(state.tasks).toHaveLength(2);
      });
    });
  });

  describe('undefined action', () => {
    it('doesn\'t work', () => {
      const previoutState = {
        newId: 1,
        taskTitle: '',
        tasks: [],
      };

      const state = reducer(
        previoutState,
        {
          type: undefined,
        },
      );

      expect(state).toEqual(previoutState);
    });
  });
});
