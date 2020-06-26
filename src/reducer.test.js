import reducer from './reducer';

import { deleteTask, addTask, updateTaskTitle } from './actions';

describe('reducer', () => {
  describe('with not action', () => {
    it('return original state', () => {
      const state = reducer({
        taskTitle: 'task',
      }, {
        type: 'widus',
      });

      expect(state.taskTitle).toBe('task');
    });
  });

  describe('updateTaskTitle', () => {
    it('returns updated taskTitle', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('새로운 이름'));

      expect(state.taskTitle).toBe('새로운 이름');
    });
  });

  describe('addTasks', () => {
    context('with taskTitle', () => {
      it('returns new task in tasks', () => {
        const state = reducer({
          taskTitle: '새로운 업무',
          tasks: [],
        }, addTask());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('새로운 업무');
      });
    });

    context('without taskTitle', () => {
      it('doesnt work', () => {
        const state = reducer({
          taskTitle: '',
          tasks: [],
        }, addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with delete task', () => {
      it('returns tasks without deleted task', () => {
        const state = reducer({
          taskTitle: '새로운 업무',
          tasks: [{
            id: 1,
            title: '너의 첫번째 임무다! #1',
          }, {
            id: 2,
            title: '너의 첫번째 임무다! #2',
          }],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).toBe(2);
      });
    });

    context('without delete tasks', () => {
      it('doesnt work', () => {
        const state = reducer({
          taskTitle: '새로운 업무',
          tasks: [{
            id: 1,
            title: '너의 첫번째 임무다! #1',
          }, {
            id: 2,
            title: '너의 첫번째 임무다! #2',
          }],
        }, deleteTask(3));

        expect(state.tasks).toHaveLength(2);
        expect(state.tasks[0].id).toBe(1);
      });
    });
  });
});
