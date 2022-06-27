import { addTask, deleteTask, updateTaskTitle } from './actions';
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

  describe('deleteTask', () => {
    it('해당 id의 task가 삭제됩니다.', () => {
      const state = reducer({
        tasks:
        [
          { id: 1, title: '완료된 일' },
        ],
      }, deleteTask(1));

      expect(state.tasks).toHaveLength(0);
    });
  });
});
