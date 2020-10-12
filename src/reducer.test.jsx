import reducer from './reducer';

import {
  addTask,
  deleteTask,
  updateTaskTitle,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New title'));

      expect(state.taskTitle).toBe('New title');
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
      it('appends task into tasks', () => {
        const state = reducer(reduceAddTask('첫번째 할 일'), addTask());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('첫번째 할 일');
        expect(state.tasks[0].id).not.toBeUndefined();
      });

      it('clear task title', () => {
        const state = reducer(reduceAddTask('첫번째 할 일'), addTask());

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("dosen't work", () => {
        const state = reducer(reduceAddTask(''), addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    it('remove task from tasks', () => {
      const state = reducer({
        tasks: [
          { id: 1, title: '첫번째 할 일' },
          { id: 2, title: '두번째 할 일' },
        ],
      }, deleteTask(1));

      expect(state.tasks).not.toContain({ id: 1 });
      expect(state.tasks).toHaveLength(1);
    });
  });
});
