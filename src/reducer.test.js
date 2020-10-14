import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
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

  describe('addTask', () => {
    context('with taskTitle', () => {
      const initialState = {
        newId: 3,
        taskTitle: '아무것도 하지 않기',
        tasks: [
          { id: 1, title: '아무 것도 하지 않기 1' },
          { id: 2, title: '아무 것도 하지 않기 2' },
        ],
      };
      it('할 일을 추가한다.', () => {
        const action = {
          type: 'addTask',
        };

        const state = reducer(initialState, action);

        expect(state.tasks).toHaveLength(3);
        expect(state.tasks[0].id).not.toBeUndefined();
      });
      it('할 일을 추가 후 "taskTitle" 비워지는지 확인한다.', () => {
        const action = {
          type: 'addTask',
        };

        const state = reducer(initialState, action);

        expect(state.taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      const initialState = {
        newId: 1,
        taskTitle: '',
        tasks: [],
      };

      it('할 일을 추가한다.', () => {
        const action = {
          type: 'addTask',
        };

        const state = reducer(initialState, action);

        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
