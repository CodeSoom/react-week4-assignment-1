import reducer from './reducer';
import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const state = reducer(previousState, updateTaskTitle('new title'));

      expect(state.taskTitle).toBe('new title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      const previousState = {
        newId: 100,
        taskTitle,
        tasks: [],
      };

      return reducer(previousState, addTask());
    }

    context('with task title', () => {
      it('appends a new task task into tasks', () => {
        const state = reduceAddTask('new task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('new task');
      });

      it('clear task title', () => {
        const state = reduceAddTask('new task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it("doesn't work", () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const previousState = {
          taskTitle: '',
          tasks: [
            { id: 1, title: 'completed task' },
          ],
        };

        const state = reducer(previousState, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it('doesn\'t work', () => {
        const previousState = {
          taskTitle: '',
          tasks: [
            { id: 1, title: 'completed task' },
          ],
        };

        const state = reducer(previousState, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
