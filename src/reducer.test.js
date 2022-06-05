import reducer, { initialState } from './reducer';
import { addTask, deleteTask, updateTaskTitle } from './actions';

import { tasks as subTask } from '../__mocks__/tasks';

describe('reducer', () => {
  const renderReducer = ({ newId = 100, taskTitle = '', tasks = [] }, actionCreator) => reducer(
    {
      newId,
      taskTitle,
      tasks,
    },
    actionCreator,
  );

  describe('updateTaskTitle', () => {
    it('taskTitle 변경', () => {
      const state = renderReducer(
        { newId: 100, taskTitle: '', tasks: [] },
        updateTaskTitle('New Title'),
      );
      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      it('appends new task into tasks', () => {
        const state = renderReducer(
          { newId: 100, taskTitle: 'New Title', tasks: [] },
          addTask(),
        );

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
      });

      it('clear taskTitles', () => {
        const state = renderReducer(
          { newId: 100, taskTitle: 'New Title', tasks: [] },
          addTask(),
        );

        expect(state.taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it("dosen't change state", () => {
        const state = renderReducer(
          { newId: 100, taskTitle: '', tasks: [] },
          addTask(),
        );

        expect(state.tasks).toHaveLength(0);
      });
    });

    describe('deleteTask', () => {
      context('exists task Id in tasks', () => {
        it('delete the task into Tasks', () => {
          const subLength = subTask.length;
          const state = renderReducer(
            { newId: 100, taskTitle: '', tasks: subTask },
            deleteTask(1),
          );
          const newLength = state.tasks.length;

          expect(subLength - newLength).toBe(1);
        });
      });
    });
    describe('reducer function', () => {
      it('dosen`t given state, set initialState', () => {
        const state = reducer(
          undefined,
          { type: 'invalid type' },
        );
        expect(state).toBe(initialState);
      });
    });
  });
});
