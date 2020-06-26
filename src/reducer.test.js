import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('should return new state with new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const state = reducer(previousState, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    it('should return new state with a new task', () => {
      const previousState = {
        taskTitle: 'New Title',
        tasks: [],
      };

      const state = reducer(previousState, addTask());

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('New Title');
    });
  });

  describe('deleteTask', () => {
    it('should return state with empty task', () => {
      const previousState = {
        taskTitle: '',
        tasks: [{ id: 101, task: '할일 1' }],
      };

      const state = reducer(previousState, deleteTask());

      expect(state.tasks).toHaveLength(0);
      
    });
  });
});
