import reducer, { initialState } from './reducer';
import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('updates title of task', () => {
      const state = {
        taskTitle: '',
      };

      const newState = reducer(state, updateTaskTitle('newTitle'));

      expect(newState.taskTitle).toBe('newTitle');
    });
  });
  describe('addTask', () => {
    context('with title', () => {
      it('adds new task to tasks', () => {
        const state = {
          taskTitle: 'new Title',
          newId: 100,
          tasks: [],
        };

        const newState = reducer(state, addTask());

        const { tasks } = newState;
        expect(tasks).toHaveLength(1);
        expect(tasks[0]).toEqual({ id: 100, title: 'new Title' });
      });
    });

    context('without title', () => {
      const state = {
        taskTitle: '',
        newId: 100,
        tasks: [],
      };

      const action = {
        type: 'AddTask',
      };

      const newState = reducer(state, action);

      const { tasks } = newState;
      expect(tasks).toHaveLength(0);
      expect(tasks).toEqual([]);
    });
  });

  describe('deleteTask', () => {
    context('with existing id', () => {
      it('delete task from tasks', () => {
        const state = {
          taskTitle: 'new Title',
          newId: 100,
          tasks: [{ id: 1, title: 'codeSoom' }],
        };

        const newState = reducer(state, deleteTask(1));

        const { tasks } = newState;
        expect(tasks).toHaveLength(0);
      });
    });

    context('with non-existing id', () => {
      const state = {
        taskTitle: 'new Title',
        newId: 100,
        tasks: [{ id: 1, title: 'codeSoom' }],
      };

      const newState = reducer(state, deleteTask(2));

      const { tasks } = newState;
      expect(tasks).toHaveLength(1);
    });
  });

  context('when invalid action is given', () => {
    const newState = reducer(undefined, { type: 'invaild' });
    expect(initialState).toEqual(newState);
  });
});
