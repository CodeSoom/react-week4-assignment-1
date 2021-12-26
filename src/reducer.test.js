import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('renders input value', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('New task'));

      expect(state.taskTitle).toBe('New task');
    });
  });

  describe('addTask', () => {
    const previousState = {
      newId: 100,
      taskTitle: 'New task',
      tasks: [],
    };

    it('renders new task', () => {
      const state = reducer(previousState, addTask());

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('New task');
    });

    it('changes newId', () => {
      const state = reducer(previousState, addTask());

      expect(state.newId).toBe(101);
    });

    it('clears task title', () => {
      const state = reducer(previousState, addTask());

      expect(state.taskTitle).toBe('');
    });
  });

  describe('deleteTask', () => {
    it('removes task', () => {
      const state = reducer({ tasks: [{ id: 100, title: 'New taks' }] }, deleteTask(100));

      expect(state.tasks).toHaveLength(0);
    });
  });

  describe('no action', () => {
    it('returns state', () => {
      const state = reducer();

      expect(state).toStrictEqual({
        newId: 100,
        taskTitle: '',
        tasks: [],
      });
    });
  });
});
