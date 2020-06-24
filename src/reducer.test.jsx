import reducer from './reducer';

describe('reducer', () => {
  describe('changeTitle', () => {
    it('change a new task title', () => {
      const prevState = {
        taskTitle: '',
        tasks: [],
      };

      const action = {
        type: 'changeTitle',
        payload: {
          taskTitle: 'New Title',
        },
      };

      const newState = reducer(prevState, action);

      expect(newState.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      it('clear task title', () => {
        const prevState = {
          taskTitle: '할 일4',
          tasks: [],
        };

        const action = {
          type: 'addTask',
        };

        const newState = addTaskReducer(prevState, action);

        expect(newState.taskTitle).toBe('');
      });

      it('appends a new task into tasks', () => {
        const prevState = {
          taskTitle: '할 일4',
          tasks: [],
        };

        const action = {
          type: 'addTask',
        };

        const newState = addTaskReducer(prevState, action);

        expect(newState.tasks).toHaveLength(1);
        expect(newState.tasks[0].id).not.toBeUndefined();
        expect(newState.tasks[0].title).toBe('할 일4');
      });
    });

    context('without taskTitle', () => {
      it('happens nothing', () => {});
    });
  });

  describe('deleteTask', () => {
    context('with task ID', () => {
      it('remove the task from tasks', () => {});
    });
    context('without task ID', () => {
      it('happens nothing', () => {});
    });
  });
});
