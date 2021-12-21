import reducer from './reducer';
import { updateTaskTitle, addTask, deleteTask } from './action';

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

      it('clears taskTitle', () => {
        const state = reducer({
          newId: 1,
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());

        expect(state.taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it('not working', () => {
        const state = reducer({
          newId: 1,
          taskTitle: '',
          tasks: [],
        }, addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with valid task Id', () => {
      it('delete the task into Tasks', () => {
        const state = reducer({
          newId: 100,
          taskTitle: '',
          tasks: [
            { id: 1, title: 'Task-1' },
            { id: 2, title: 'Task-2' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(1);
      });
    });

    context('with invalid task Id', () => {
      it('not working', () => {
        const state = reducer({
          newId: 100,
          taskTitle: '',
          tasks: [
            { id: 1, title: 'Task-1' },
            { id: 2, title: 'Task-2' },
          ],
        }, deleteTask(200));

        expect(state.tasks).toHaveLength(2);
      });
    });
  });
});
