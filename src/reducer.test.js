import reducer from './reducer';
import { updateTaskTitle, addTask } from './action';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Task'));

      expect(state.taskTitle).toBe('New Task');
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      it('append new task into tasks', () => {
        const state = reducer({
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
