import reducer from './reducer';
import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('change task title', () => {
      const { taskTitle } = reducer({
        taskTitle: 'New Title',
      }, updateTaskTitle('New Title'));

      expect(taskTitle).toBe('New Title');
    });

    it('should update action', () => {
      expect(
        reducer(undefined, {}),
      ).toEqual({
        newId: 100,
        taskTitle: '',
        tasks: [],
      });

      expect(
        reducer(undefined, updateTaskTitle('New Title')),
      ).toEqual({
        newId: 100,
        taskTitle: 'New Title',
        tasks: [],
      });

      expect(
        reducer({
          newId: 100,
          taskTitle: 'New Title',
          tasks: [],
        }, updateTaskTitle('Second Title')),
      ).toEqual({
        newId: 100,
        taskTitle: 'Second Title',
        tasks: [],
      });
    });
  });

  describe('addTask', () => {
    context('with existed task title', () => {
      it('add new task', () => {
        const state = reducer({
          taskTitle: 'New Title',
          tasks: [],
        }, addTask());

        expect(state.taskTitle).toBe('');
        expect(state.tasks).toHaveLength(1);
      });
    });

    context('with empty task title', () => {
      it('add new task', () => {
        const state = reducer({
          taskTitle: '',
          tasks: [],
        }, addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Todo 할일하기' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('with not existed task ID', () => {
      it('remove the task from tasks', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Todo 할일하기' },
          ],
        }, deleteTask(2));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
