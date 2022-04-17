import reducer from './reducer';
import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('updateTaskTitle', () => {
    it('changes task title', () => {
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
    context('with taskTitle', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask({ taskTitle: 'New Task' });

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clear task title', () => {
        const state = reduceAddTask({ taskTitle: 'New Task' });

        expect(state.taskTitle).toBe('');
      });
    });
    context('without task title', () => {
      it("doesn't work", () => {
        const state = reduceAddTask('');

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

    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const state = reduceDeleteTask({ id: 1 });
        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it("doesn't work", () => {
        const state = reduceDeleteTask({ id: 100 });

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  context('with non existing actions.type', () => {
    const someFunction = jest.fn(({ id, taskTitle }) => ({
      type: 'someFunction',
      payload: {
        id,
        taskTitle,
      },
    }));

    it("doesn't change initial state", () => {
      const state = reducer(undefined, someFunction({ id: 101, taskTitle: 'New Title' }));

      expect(state.newId).toBe(100);
      expect(state.taskTitle).toBe('');
      expect(state.tasks).toHaveLength(0);
    });
  });
});
