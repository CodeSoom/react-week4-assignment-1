import reducer from './reducer';
import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    const previousState = {
      id: 100,
      taskTitle: '',
      tasks: [],
    };

    it('returns new task title', () => {
      const state = reducer(previousState, updateTaskTitle('New Task'));

      expect(state.taskTitle).toBe('New Task');
    });
  });

  describe('addTask', () => {
    context('with task title', () => {
      const previousState = {
        id: 100,
        taskTitle: 'New Task',
        tasks: [],
      };

      it('appends a new task into tasks', () => {
        const state = reducer(previousState, addTask());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clear task title', () => {
        const state = reducer(previousState, addTask());

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      const previousState = {
        id: 100,
        taskTitle: '',
        tasks: [],
      };

      it("dosen't working", () => {
        const state = reducer(previousState, addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    const previousState = {
      id: 102,
      taskTitle: 'New Task',
      tasks: [
        { id: 100, title: 'New Task#1' },
        { id: 101, title: 'New Task#2' },
      ],
    };

    context('with existed task id', () => {
      it('remove the task into tasks', () => {
        const state = reducer(previousState, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks).not.toContainEqual({ id: 100, title: 'New Task#1' });
      });
    });

    context('without existed task id', () => {
      it("doesn't working", () => {
        const state = reducer(previousState, deleteTask(102));

        expect(state.tasks).toHaveLength(2);
        expect(state.tasks).toContainEqual({ id: 100, title: 'New Task#1' });
        expect(state.tasks).toContainEqual({ id: 101, title: 'New Task#2' });
      });
    });
  });

  context('without defined type', () => {
    const previousState = {
      id: 102,
      taskTitle: 'New Task',
      tasks: [
        { id: 100, title: 'New Task#1' },
        { id: 101, title: 'New Task#2' },
      ],
    };

    it('returns previous state', () => {
      const state = reducer(previousState, { type: 'undefinedType' });

      expect(state).toEqual(previousState);
    });

    context('without state', () => {
      it('returns initial state', () => {
        const state = reducer(undefined, { type: 'undefinedType' });

        expect(state).toEqual({
          newId: 100,
          taskTitle: '',
          tasks: [],
        });
      });
    });
  });
});
