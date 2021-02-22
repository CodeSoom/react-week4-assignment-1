import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('initialState', () => {
    context('with action', () => {
      it('returns initialState', () => {
        const state = reducer(undefined, updateTaskTitle);

        expect(state).toEqual({
          newId: 100,
          taskTitle: '',
          tasks: [],
        });
      });
    });

    context('without action', () => {
      it('returns initialState', () => {
        const state = reducer();

        expect(state).toEqual({
          newId: 100,
          taskTitle: '',
          tasks: [],
        });
      });
    });
  });

  it("has state but doesn't have action", () => {
    const state = reducer({
      newId: 100,
      taskTitle: '할일',
      tasks: [],
    });

    expect(state).toEqual({
      newId: 100,
      taskTitle: '할일',
      tasks: [],
    });
  });

  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('New Title'));
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
        expect(state.tasks[0]).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
        expect(state.newId).toEqual(101);
      });

      it('clears task title', () => {
        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("doens't work", () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
        expect(state.newId).toEqual(100);
        expect(state.taskTitle).toBe('');
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('removes the task from tasks', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it("doesn't work", () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(100));
        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
