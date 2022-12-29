import reducer from './reducer';
import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns updated task title', () => {
      const state = reducer(
        {
          taskTitle: '',
        },
        updateTaskTitle('코드숨 과제')
      );

      expect(state.taskTitle).toBe('코드숨 과제');
    });
  });

  describe('addTask', () => {
    const reduceAddTask = (taskTitle) =>
      reducer({ newId: 100, taskTitle, tasks: [] }, addTask());

    context('with taskTitle', () => {
      it('returns state with new tasks', () => {
        const state = reduceAddTask('코드숨 과제');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].taskTitle).toBe('코드숨 과제');
      });

      it('clear task title', () => {
        const state = reduceAddTask('코드숨 과제');

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
    it('removes the task from tasks', () => {
      const state = reducer(
        {
          tasks: [
            {
              id: 1,
              taskTitle: 'PR',
            },
          ],
        },
        deleteTask()
      );

      expect(state.tasks).toHaveLength(0);
    });
  });
});
