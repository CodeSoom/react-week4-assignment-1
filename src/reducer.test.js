import reducer from './reducer';
import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('parameters that are not defined', () => {
    it('should return the initial state', () => {
      expect(reducer()).toEqual({
        newId: 100,
        taskTitle: '',
        tasks: [],
      });
    });
  });

  describe("Action type that doesn't exist", () => {
    it('returns the initial state', () => {
      const initialState = {
        newId: 100,
        taskTitle: '',
        tasks: [{ id: 1, title: '아무 것도 하지 않기 #1' }, { id: 2, title: '아무 것도 하지 않기 #2' }],
      };

      const state = reducer(initialState, { type: 'unknown' });
      expect(state).toEqual(initialState);
    });
  });

  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer({
        newId: 100,
        taskTitle,
        tasks: [],
      }, addTask());
    }

    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clears task title', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
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
    const tasks = [{ id: 1, title: 'Task' }];

    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const originLength = tasks.length;

        const state = reducer({ tasks }, deleteTask(1));

        const newLength = state.tasks.length;

        expect(newLength - originLength).toBe(-1);
      });
    });

    context('without existed task ID', () => {
      it("doesn't work", () => {
        const originLength = tasks.length;

        const state = reducer({ tasks }, deleteTask(100));

        const newLength = state.tasks.length;

        expect(originLength).toBe(newLength);
      });
    });
  });
});
