import reducer from './reducer';
import {
  updateTask, addTask, deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTask', () => {
    it('changes task', () => {
      const state = reducer({
        newTask: '',
      }, updateTask('New Title'));

      expect(state.newTask).toBe('New Title');
    });
  });

  describe('addTask', () => {
    context('with task', () => {
      it('appends a new task into tasks', () => {
        const state = reducer({
          newId: 100,
          newTask: 'New Task',
          tasks: [],
        }, addTask());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });
    });

    context('without task', () => {
      it("doesn't work", () => {
        const state = reducer({
          newTask: '',
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
            { id: 1, title: 'Task' },
          ],
          newTask: '',
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it("doesn't work", () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
          newTask: '',
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
