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
      it('clear task title', () => {});

      it('appends a new task into tasks', () => {});
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
