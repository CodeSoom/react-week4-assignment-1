import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const previousState = {
        taskTitle: '',
      };
      const action = {
        type: 'updateTaskTitle',
        payload: {
          title: 'New title',
        },
      };

      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('New title');
    });
  });

  describe('addTask', () => {
    context('with task title', () => {
      it('appends task into tasks', () => {
        const previousState = {
          newId: 100,
          taskTitle: '첫번째 할 일',
          tasks: [],
        };

        const action = {
          type: 'addTask',
        };

        const state = reducer(previousState, action);

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('첫번째 할 일');
        expect(state.tasks[0].id).not.toBeUndefined();
      });

      it('clear task title', () => {
        const previousState = {
          newId: 100,
          taskTitle: '첫번째 할 일',
          tasks: [],
        };

        const action = {
          type: 'addTask',
        };

        const state = reducer(previousState, action);

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("dosen't work", () => {
        const previousState = {
          newId: 100,
          taskTitle: '',
          tasks: [],
        };

        const action = {
          type: 'addTask',
        };

        const state = reducer(previousState, action);

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    it('remove task from tasks', () => {
      const previousState = {
        tasks: [
          { id: 1, title: '첫번째 할 일' },
          { id: 2, title: '두번째 할 일' },
        ],
      };

      const action = {
        type: 'deleteTask',
        payload: { id: 1 },
      };

      const state = reducer(previousState, action);

      expect(state.tasks).not.toContain({ id: 1 });
      expect(state.tasks).toHaveLength(1);
    });
  });
});
