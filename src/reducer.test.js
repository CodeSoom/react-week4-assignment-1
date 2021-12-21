import reducer from './reducer';
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
      it('append new task into tasks', () => {
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
      it('not working', () => {
        const state = renderReducer(
          { newId: 100, taskTitle: '', tasks: [] },
          addTask(),
        );

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with valid task Id', () => {
      it('delete the task into Tasks', () => {
        const state = renderReducer(
          { newId: 100, taskTitle: '', tasks: stubTasks },
          deleteTask(1),
        );

        expect(state.tasks).toHaveLength(1);
      });
    });

    context('with invalid task Id', () => {
      it('not working', () => {
        const state = renderReducer(
          { newId: 100, taskTitle: '', tasks: stubTasks },
          deleteTask(200),
        );

        expect(state.tasks).toHaveLength(2);
      });
    });
  });

  describe('request invalid action type', () => {
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
});
