import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('taskTitle이 변경된다.', () => {
      const newState = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Task'));

      expect(newState).toHaveProperty('taskTitle', 'New Task');
    });
  });

  describe('addTask', () => {
    context('현재 입력중인 할 일이 있으면', () => {
      it('할 일이 추가된다.', () => {
        const newState = reducer({
          newId: 100,
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());

        expect(newState.tasks).toHaveLength(1);
        expect(newState.tasks[0].title).toBe('New Task');
        expect(newState.tasks[0].id).toBe(100);
      });

      it('입력중인 할 일이 비워진다.', () => {
        const newState = reducer({
          newId: 100,
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());

        expect(newState.taskTitle).toBe('');
      });
    });
  });
});
