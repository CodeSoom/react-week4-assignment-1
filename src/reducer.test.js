import { addTask, updateTaskTitle } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    it('returns new task on the tasks', () => {
      const state = reducer({
        tasks: [{ id: 1, title: '할 일#1' }],
      }, addTask());

      expect(state.tasks).toHaveLength(2);
    });
  });
});
