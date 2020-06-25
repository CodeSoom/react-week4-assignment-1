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

  describe('addTask', () => {
    context('with task title', () => {
      it('tasks에 새로운 task가 추가된다.', () => {
        const newState = reducer({
          tasks: [],
        }, {
          type: 'addTask',
          payload: {
            taskTitle: '첫 번째 할 일',
          },
        });

        expect(newState.tasks).toHaveLength(1);
      });
    });
  });
});
