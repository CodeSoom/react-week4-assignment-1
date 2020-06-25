import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('taskTitle을 바꾼다.', () => {
      const newState = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Task'));

      expect(newState.taskTitle).toBe('New Task');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer({
        newId: 1,
        taskTitle,
        tasks: [],
      }, addTask());
    }
    context('할 일이 있으면', () => {
      it('할 일을 추가한다.', () => {
        const newState = reduceAddTask('New Task');

        expect(newState.tasks).toHaveLength(1);
        expect(newState.tasks[0].id).not.toBeUndefined();
        expect(newState.tasks[0].title).toBe('New Task');
      });

      it('추가한 뒤 초기화 한다', () => {
        const newState = reduceAddTask('New Task');
        expect(newState.taskTitle).toBe('');
      });
    });

    context('할 일이 없으면', () => {
      it('아무것도 추가되지 않는다.', () => {
        const newState = reduceAddTask('');
        expect(newState.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    it('할 일 목록에서 삭제한다.', () => {
      const newState = reducer({
        newId: 10,
        taskTitle: '',
        tasks: [
          { id: 1, title: 'New Task' },
        ],
      }, deleteTask(1));
      expect(newState.tasks).toHaveLength(0);
    });
  });
});
