import reducer, { updateTaskTitle, addTask, deleteTask } from './todosSlice';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const previousState = {};
      const stete = reducer(previousState, updateTaskTitle('1'));
      expect(stete.taskTitle).toEqual('1');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return {
        newId: 100,
        taskTitle,
        tasks: [],
      };
    }
    context('with task title', () => {
      it('appends a task into tasks', () => {
        const previousState = reduceAddTask('New Task');
        const stete = reducer(previousState, addTask());
        expect(stete.tasks).toHaveLength(1);
        expect(stete.tasks[0].id).not.toBeUndefined();
        expect(stete.tasks[0].title).toBe('New Task');
      });

      it('clears task title', () => {
        const previousState = reduceAddTask('New Task');
        const stete = reducer(previousState, addTask());
        expect(stete.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("doesn't work", () => {
        const previousState = reduceAddTask('');
        const stete = reducer(previousState, addTask());
        expect(stete.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with task Id', () => {
      it('remove the task from tasks', () => {
        const previousState = {
          tasks: [
            { id: 1, title: 'Task' },
          ],
        };
        const stete = reducer(previousState, deleteTask(1));
        expect(stete.tasks).toHaveLength(0);
      });
    });

    context('without existed task Id', () => {
      it("doesn't work", () => {
        const previousState = {
          tasks: [
            { id: 1, title: 'Task' },
          ],
        };
        const stete = reducer(previousState, deleteTask(100));
        expect(stete.tasks).toHaveLength(1);
      });
    });
  });
});
