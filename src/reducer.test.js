import reducer from './reducer';
import { addTask } from './action/actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('새로운 이름으로 변경된다 ', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'New Title',
        },
      };
      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    it('새로운 Task가 등록되면 기존의 Title은 초기화된다', () => {
      const expectTitle = '';

      const { taskTitle } = reducer({
        taskTitle: 'New Task',
        tasks: [],
      }, addTask());

      expect(taskTitle).toBe(expectTitle);
    });
  });
});
