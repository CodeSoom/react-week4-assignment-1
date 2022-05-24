import reducer from './reducer';

import { updateTaskTitle, addTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });
});

describe('addTask', () => {
  describe('updateTaskTitle', () => {
    function reduceAddTask(taskTitle) {
      return reducer(
        {
          newId: 100,
          taskTitle,
          tasks: [],
        },
        addTask(),
      );
    }
    it('appends a new task into tasks', () => {
      const state = reduceAddTask('New Task');

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('New Task');
      expect(state.tasks[0].id).not.toBeUndefined();
    });

    it('clear task title', () => {
      const state = reduceAddTask('New Task');

      expect(state.taskTitle).toBe('');
    });
    context('without task title', () => {
      it("doesn't work", () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
