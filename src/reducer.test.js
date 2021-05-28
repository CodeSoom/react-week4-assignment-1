import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer 관련 테스트 코드', () => {
  describe('updateTaskTitle', () => {
    it('새로운 state(상태)가 만들어지고 새로운 task title로 변경된다', () => {
      const initialState = {
        taskTitle: '',
        tasks: [],
      };

      const state = reducer(initialState, updateTaskTitle('뭐라도 하기'));

      expect(state.taskTitle).toBe('뭐라도 하기');
    });
  });

  describe('addTask', () => {
    context('새로운 task title 있을 경우', () => {
      it('tasks에 새로운 task가 추가되어야 한다', () => {
        const setState = {
          taskTitle: '뭐라도 하기',
          tasks: [],
        };

        const state = reducer(setState, addTask());

        expect(state.tasks[0].title).toBe('뭐라도 하기');
      });
    });

    context('새로운 task title 없을 경우', () => {
      it('변화가 일어나지 않는다', () => {
        const setState = {
          taskTitle: '',
          tasks: [],
        };

        const state = reducer(setState, addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('task id 있을 경우', () => {
      it('tasks에 task가 삭제된다', () => {
        const previouState = {
          tasks: [{ id: 1, title: '뭐라도 하기' }],
        };

        const state = reducer(previouState, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('task id 없을 경우', () => {
      it('변화가 일어나지 않는다', () => {
        const previouState = {
          tasks: [],
        };

        const state = reducer(previouState, deleteTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('no action type', () => {
    it('상태값이 그대로 반환된다', () => {
      const previouState = {
        taskTitle: '',
        tasks: [],
      };
      const action = {};

      const state = reducer(previouState, action);

      expect(state.taskTitle).toBe('');
    });

    it('상태값이 없으면 초기값이 그대로 반환된다', () => {
      const state = reducer();

      expect(state.taskTitle).toBe('');
    });
  });
});
