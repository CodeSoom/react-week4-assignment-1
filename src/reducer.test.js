import { updateTaskTitle, addTaskTitle, deleteTaskTitle } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes new task title', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTaskTitle', () => {
    function reduceAddTaskTitle(taskTitle) {
      return reducer(
        {
          newId: 100,
          taskTitle,
          tasks: [],
        },
        addTaskTitle(),
      );
    }
    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTaskTitle('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clears task title', () => {
        const state = reduceAddTaskTitle('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("doesn't work", () => {
        const state = reduceAddTaskTitle('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTaskTitle', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const state = reducer(
          { tasks: [{ id: 1, title: 'Task' }] },
          deleteTaskTitle(1),
        );

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it("doesn't work", () => {
        const state = reducer(
          { tasks: [{ id: 1, title: 'Task' }] },
          deleteTaskTitle(100),
        );

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
