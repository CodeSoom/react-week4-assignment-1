import { addTask, updateTaskTitle } from './actions';

import reducer from './reducer';

describe('reducer', () => {
  describe('taskTitle 변경을 시도한다', () => {
    it('taskTitle이 변경이된다', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('새로운 할일이다!'));

      expect(state.taskTitle).toBe('새로운 할일이다!');
    });
  });

  describe('tasks의 할일추가를 시도한다 ', () => {
    it('tasks에 할일이 추가되었다', () => {
      const state = reducer({ taskTitle: '할일을 추가해봅시다!', tasks: [] }, addTask());

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('할일을 추가해봅시다!');
    });
  });
});
