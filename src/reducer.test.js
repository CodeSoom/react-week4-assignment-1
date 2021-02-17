import { addTask, deleteTask, updateTaskTitle } from './action';
import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('홈트하기'));

      expect(state.taskTitle).toBe('홈트하기');
    });
  });

  describe('addTask', () => {
    it('returns new state with a new task', () => {
      const state = reducer({
        taskTitle: 'New Task',
        tasks: [],
      }, addTask());

      expect(state.tasks).toHaveLength(1);
    });
  });

  describe('deleteTask', () => {
    it('returns new state with a new task', () => {
      const state = reducer({
        tasks: [{ id: 1, title: 'Task-1' }],
      }, deleteTask());

      expect(state.tasks).toHaveLength(0);
    });
  });
});
