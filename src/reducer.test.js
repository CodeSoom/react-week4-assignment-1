import reducer, { initialState } from './reducer';
import { updateTaskTitle, addTask, deleteTask } from './action';

import { tasks as stubTasks } from '../fixtures/tasks';

describe('reducer', () => {
  const renderReducer = ({ newId = 100, taskTitle = '', tasks = [] }, actionCreator) => reducer({
    newId,
    taskTitle,
    tasks,
  }, actionCreator);

  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const state = renderReducer(
        { newId: 100, taskTitle: '', tasks: [] },
        updateTaskTitle('New Task'),
      );

      expect(state.taskTitle).toBe('New Task');
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      it('appends new task into tasks', () => {
        const state = renderReducer(
          { newId: 100, taskTitle: 'New Task', tasks: [] },
          addTask(),
        );

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
      });

      it('clears taskTitle', () => {
        const state = renderReducer(
          { newId: 100, taskTitle: 'New Task', tasks: [] },
          addTask(),
        );

        expect(state.taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it("doesn't change state", () => {
        const state = renderReducer(
          { newId: 100, taskTitle: '', tasks: [] },
          addTask(),
        );

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('exists task Id in tasks', () => {
      it('delete the task into Tasks', () => {
        const oldLength = stubTasks.length;
        const state = renderReducer(
          { newId: 100, taskTitle: '', tasks: stubTasks },
          deleteTask(1),
        );
        const newLength = state.tasks.length;

        expect(oldLength - newLength).toBe(1);
      });
    });

    context("doesn't exists task Id in tasks", () => {
      it("doesn't change state", () => {
        const state = renderReducer(
          { newId: 100, taskTitle: '', tasks: stubTasks },
          deleteTask(200),
        );

        expect(state.tasks).toHaveLength(2);
      });
    });
  });

  describe('request Not defined action type', () => {
    it('return previous state', () => {
      const state = renderReducer(
        { newId: 100, taskTitle: 'exist taskTitle', tasks: stubTasks },
        { type: 'invalid type' },
      );

      expect(state.newId).toBe(100);
      expect(state.taskTitle).toBe('exist taskTitle');
      expect(state.tasks).toEqual(stubTasks);
    });
  });

  describe('reducer function', () => {
    it('doesn\'t given state, set initialState', () => {
      const state = reducer(
        undefined,
        { type: 'invalid type' },
      );

      expect(state).toEqual(initialState);
    });
  });
});
