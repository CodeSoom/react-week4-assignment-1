import reducer from './reducer';

describe('reducer', () => {
  describe('update task title', () => {
    it('할 일을 입력한다.', () => {
      const initialState = {
        taskTitle: '',
      };
      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: '아무것도 하지 않기',
        },
      };
      const state = reducer(initialState, action);

      expect(state.taskTitle).toBe('아무것도 하지 않기');
    });
  });
});
