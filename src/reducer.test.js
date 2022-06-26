import reducer from './reducer';

describe('reducer', () => {
  const newId = 101;
  const taskTitle = '새로운 할 일';

  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle,
        },
      };

      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe(taskTitle);
    });
  });

  describe('addTask', () => {
    const action = {
      type: 'addTask',
      payload: {
        taskTitle,
      },
    };

    context('with task title', () => {
      const previousState = {
        newId,
        taskTitle,
        tasks: [],
      };

      it('appends a new task with new id into tasks', () => {
        const state = reducer(previousState, action);

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).toBe(newId);
        expect(state.tasks[0].title).toBe(taskTitle);
      });

      it('adds 1 to newId', () => {
        const state = reducer(previousState, action);

        expect(state.newId).toBe(newId + 1);
      });

      it('makes taskTitle blank', () => {
        const state = reducer(previousState, action);

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      const previousState = {
        newId,
        taskTitle: '',
        tasks: [],
      };

      it("doesn't work", () => {
        const state = reducer(previousState, action);

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    const previousState = {
      tasks: [
        { id: 101, title: '오늘 할 일 1' },
        { id: 102, title: '오늘 할 일 2' },
      ],
    };

    context('with existent task id', () => {
      const action = {
        type: 'deleteTask',
        payload: {
          id: 101,
        },
      };

      it('removes the task from tasks', () => {
        const state = reducer(previousState, action);

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks.find(({ id }) => id === 101)).toBeUndefined();
      });
    });

    context('with non-existent task id', () => {
      const action = {
        type: 'deleteTask',
        payload: {
          id: 32134,
        },
      };

      it("doesn't work", () => {
        const state = reducer(previousState, action);

        expect(state.tasks).toHaveLength(2);
      });
    });
  });
});
