import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
} from './actions';

describe('reducer 관련 테스트 코드', () => {
  describe('updateTaskTitle', () => {
    it('새로운 state(상태)가 만들어지고 새로운 task title로 변경된다', () => {
      // given
      const initialState = {
        taskTitle: '',
        tasks: [],
      };

      // when
      const state = reducer(initialState, updateTaskTitle('뭐라도 하기'));
      // then
      expect(state.taskTitle).toBe('뭐라도 하기');
    });

    describe('addTask', () => {
      it('새로운 task title이 있으면 tasks에 새로운 task가 추가되어야 한다', () => {
        // given
        const setState = {
          taskTitle: '뭐라도 하기',
          tasks: [],
        };

<<<<<<< HEAD
        // when
        const state = reducer(setState, addTask());
=======
        const action = {
          type: 'addTask',
          payload: {},
        };
        // when
        const state = reducer(setState, action);
>>>>>>> 2ae82ba639a7e71e33b9d95491a5566813618656
        // then
        expect(state.tasks[0].title).toBe('뭐라도 하기');
      });
    });
  });
});
