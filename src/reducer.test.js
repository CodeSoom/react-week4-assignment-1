import { addTask, updateTaskTitle } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('taskTitle을 입력한 값으로 변경하여 반환합니다.', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    it('tasks가 새로운 task가 담겨 반환됩니다.', () => {
      const state = reducer({
        taskTitle: '새로운 할 일',
        tasks: [],
      }, addTask());

      expect(state.tasks[0].title).toBe('새로운 할 일');
    });
  });
});
