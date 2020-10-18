import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New title'));

      expect(state.taskTitle).toBe('New title');
    });
  });

  describe('addTask', () => {
    const addReducer = (taskTitle) => reducer({
      newId: 100,
      taskTitle,
      tasks: [],
    }, addTask());

    context('with exist a new task title', () => {
      it('appends new task into tasks', () => {
        const state = addReducer('New task');

        expect(state.tasks).toHaveLength(1);

        expect(state.tasks[0].title).toBe('New task');
        expect(state.tasks[0].id).not.toBeUndefined();
      });

      it('clears task after appending', () => {
        const state = addReducer('New task');

        expect(state.tasks).toHaveLength(1);

        expect(state.taskTitle).toBe('');
      });
    });

    context('with not exist a new task title', () => {
      it("doesn't work", () => {
        const state = addReducer('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    function deleteReducer(id) {
      return reducer({
        tasks: [
          { id: 1, title: '할일 #1' },
          { id: 2, title: '할일 #2' },
        ],
      }, deleteTask(id));
    }

    context('with existed task ID', () => {
      it('remove the task in tasks', () => {
        const state = deleteReducer(1);

        expect(state.tasks).toHaveLength(1);
      });
    });

    context('with not existed task ID', () => {
      it("doesn't work", () => {
        const state = deleteReducer(100);

        expect(state.tasks).toHaveLength(2);
      });
    });
  });

  describe('Unhandled action type', () => {
    context('with unhandled action type', () => {
      it('returns initial state', () => {
        const state = reducer(undefined, { type: 'Unhandled type' });

        expect(state.newId).toBe(100);
        expect(state.taskTitle).toBe('');
        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
