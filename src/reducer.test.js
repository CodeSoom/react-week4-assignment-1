import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
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
    it('새로운 할 일을 추가한 상태를 반환한다.', () => {
      const newState = reducer({
        newId: 1,
        taskTitle: 'New Task',
        tasks: [],
      }, addTask());

      expect(newState.newId).toBe(2);
      expect(newState.tasks).not.toHaveLength(0);
    });

    it('추가한 뒤 taskTitle을 초기화 한다', () => {
      const newState = reducer({
        newId: 1,
        taskTitle: 'New Task',
        tasks: [],
      }, addTask());
      expect(newState.taskTitle).toBe('');
    });
  });
});
