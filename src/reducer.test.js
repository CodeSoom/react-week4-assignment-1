import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('should return new state with new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const state = reducer(previousState, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer(
        {
          newId: 100,
          taskTitle,
          tasks: [],
        }, addTask(),
      );
    }

    context('with task', () => {
      it('should return new state with a new task', () => {
        const state = reduceAddTask('New Title');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Title');
      });
    });

    context('without task', () => {
      it('should not working', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with exiting task id', () => {
      it('should return state with empty task', () => {
        const previousState = {
          tasks: [{ id: 101, task: '할일 1' }],
        };

        const state = reducer(previousState, deleteTask(101));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('with none existing id', () => {
      it('should not working', () => {
        const previousState = {
          tasks: [{ id: 101, task: '할일 1' }],
        };

        const state = reducer(previousState, deleteTask(102));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
