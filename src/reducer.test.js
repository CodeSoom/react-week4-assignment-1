import reducer from './reducer';

describe('reducer 관련 테스트 코드', () => {
  describe('updateTaskTitle', () => {
    it('새로운 state(상태)가 만들어지고 새로운 task title로 변경된다', () => {
      // given
      const initialState = {
        taskTitle: '',
        tasks: [],
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: '뭐라도 하기',
        },
      };
      // when
      const state = reducer(initialState, action);
      // then
      expect(state.taskTitle).toBe('뭐라도 하기');
    });
  });
});
