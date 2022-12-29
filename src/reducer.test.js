import reducer from './reducer';
import { updateTaskTitle, addTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns updated task title', () => {
      const state = reducer(
        {
          taskTitle: '',
        },
        updateTaskTitle('코드숨 과제')
      );

      expect(state.taskTitle).toBe('코드숨 과제');
    });
  });
  describe('addTask', () => {
    it('returns state with new tasks', () => {
      const state = reducer(
        { newId: 100, taskTitle: '코드숨 과제', tasks: [] },
        addTask()
      );

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].taskTitle).toBe('코드숨 과제');
    });
  });
});
