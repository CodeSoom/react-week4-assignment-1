import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('taskTitle을 입력한 값으로 변경하여 반환합니다.', () => {
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
});
