import reducer from './reducer';

import {
  addTask,
  deleteTask,
  updateTaskTitle,
} from './actions';

describe('reducer', () => {
  describe('initialState', () => {
    it('set the inital state', () => {
      const state = reducer();

      expect(state.taskTitle).toBe('');
      expect(state.tasks).toHaveLength(0);
      expect(state.newId).toBe(100);
    });
  });

  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const taskTitle = '';
      const newTaskTitle = 'New title';

      const state = reducer({
        newId: 100,
        taskTitle,
        tasks: [],
      }, updateTaskTitle(newTaskTitle));

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
      const taskTitle = '첫번째 할 일';

      it('appends task into tasks', () => {
        const state = reducer(reduceAddTask(taskTitle), addTask());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe(taskTitle);
        expect(state.tasks[0].id).not.toBeUndefined();
      });

      it('clear task title', () => {
        const state = reducer(reduceAddTask(taskTitle), addTask());

        expect(state.taskTitle).toBe('');
      });
    });

    context('with empty task title', () => {
      it('appends nothing', () => {
        const taskTitle = '';

        const state = reducer(reduceAddTask(taskTitle), addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    it('remove task from tasks', () => {
      const tasks = [
        { id: 1, title: '첫번째 할 일' },
        { id: 2, title: '두번째 할 일' },
      ];

      const state = reducer({
        newId: 100,
        taskTitle: '',
        tasks,
      }, deleteTask(tasks[0].id));

      expect(state.tasks).not.toContain({ id: tasks[0].id });
      expect(state.tasks).toHaveLength(1);
    });
  });
});
