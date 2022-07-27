import reducer from './reducer';

import { updateTaskTitle, addTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });

    it('appens a new task into tasks', () => {
      const state = reducer({ taskTitle: 'New Task', tasks: [] }, addTask());

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('New Task');
    });

    it('clear task title ', () => {
      const state = reducer({ taskTitle: 'New Task', tasks: [] }, addTask());

      expect(state.taskTitle).toBe('');
    });
  });
});
