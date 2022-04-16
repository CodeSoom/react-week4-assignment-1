import { addTask, deleteTask, updateTaskTitle } from './action';
import reducer from './reducer';

describe('reducer', () => {
  context('action test', () => {
    it('default action', () => {
      const state = reducer({
        state: {
          newId: 100,
          taskTitle: '',
          tasks: [],
        },
        action: '',
      });

      expect(state.newId).toBe(100);
      expect(state.taskTitle).toBe('');
      expect(state.tasks).toEqual([]);
    });

    it('updateTaskTitle', () => {
      const state = reducer({
        state: {
          taskTitle: '',
        },
        action: updateTaskTitle('New Title'),
      });

      expect(state.taskTitle).toBe('New Title');
    });

    it('addTask', () => {
      const state = reducer({
        state: {
          tasks: [],
          taskTitle: 'New Title',
        },
        action: addTask(),
      });

      expect(state.tasks.length).toBe(1);
    });

    it('deleteTask', () => {
      const state = reducer({
        state: {
          tasks: [
            {
              id: 1,
              title: 'Task 1',
            },
            {
              id: 2,
              title: 'Task 2',
            },
          ],
        },
        action: deleteTask({ id: 1 }),
      });

      expect(state.tasks.length).toBe(1);
      expect(state.tasks[0].id).toBe(2);
    });
  });
});
