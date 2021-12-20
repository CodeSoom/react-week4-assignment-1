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
          newId: 1,
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
      });
    });

    context('without taskTitle', () => {
      it('not working', () => {
        const state = reducer({
          taskTitle: '',
          tasks: [],
        }, addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
