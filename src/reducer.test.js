import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    context('with new task title', () => {
      it('returns new state', () => {
        const newState = reducer({
          taskTitle: '',
        }, {
          type: 'updateTaskTitle',
          payload: {
            taskTitle: 'New task',
          },
        });

        expect(newState.taskTitle).toBe('New task');
      });
    });
  });
});
