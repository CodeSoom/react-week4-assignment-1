import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('taskTitle이 변경된다.', () => {
      const newState = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Task'));

      expect(newState.taskTitle).toBe('New Task');
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

    context('현재 입력중인 할 일이 없으면', () => {
      it('할 일이 추가되지 않는다.', () => {
        const newState = reducer({
          newId: 100,
          taskTitle: '',
          tasks: [],
        }, addTask());

        expect(newState.tasks).toHaveLength(0);
      });
    });

    describe('deleteTask', () => {
      it('할 일이 삭제된다.', () => {
        const newState = reducer({
          tasks: [
            {
              id: 1,
              title: '아무것도 하지 않기',
            },
          ],
        }, deleteTask(1));

        expect(newState.tasks).toHaveLength(0);
      });
    });
  });
});
