import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const action = {
        type: 'updateTaskTitle',
        payload: {
          title: 'New title',
        },
      };

      const state = reducer({
        taskTitle: '',
      }, action);

      expect(state.taskTitle).toBe('New title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return {
        newId: 100,
        taskTitle,
        tasks: [],
      };
    }

    context('with task title', () => {
      it('appends task into tasks', () => {
        const action = {
          type: 'addTask',
        };

        const state = reducer(reduceAddTask('첫번째 할 일'), action);

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('첫번째 할 일');
        expect(state.tasks[0].id).not.toBeUndefined();
      });

      it('clear task title', () => {
        const action = {
          type: 'addTask',
        };

        const state = reducer(reduceAddTask('첫번째 할 일'), action);

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("dosen't work", () => {
        const action = {
          type: 'addTask',
        };

        const state = reducer(reduceAddTask(''), action);

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    it('remove task from tasks', () => {
      const action = {
        type: 'deleteTask',
        payload: { id: 1 },
      };

      const state = reducer({
        tasks: [
          { id: 1, title: '첫번째 할 일' },
          { id: 2, title: '두번째 할 일' },
        ],
      }, action);

      expect(state.tasks).not.toContain({ id: 1 });
      expect(state.tasks).toHaveLength(1);
    });
  });
});
