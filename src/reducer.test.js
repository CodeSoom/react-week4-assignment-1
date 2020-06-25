import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  context('updateTaskTitle', () => {
    it('taskTitle을 바꿔 새로운 상태를 반환한다.', () => {
      const newState = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Task'));

      expect(newState.taskTitle).toBe('New Task');
    });
  });

  context('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer({
        newId: 1,
        taskTitle,
        tasks: [],
      }, addTask());
    }

    it('새로운 할 일을 추가한 상태를 반환한다.', () => {
      const newState = reduceAddTask('New Task');

      expect(newState.newId).toBe(2);
      expect(newState.tasks).not.toHaveLength(0);
    });

    it('추가한 뒤 taskTitle을 초기화 한다', () => {
      const newState = reduceAddTask('New Task');
      expect(newState.taskTitle).toBe('');
    });
  });

  describe('deleteTask', () => {
    it('할 일이 삭제된 상태를 반환한다.', () => {
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
