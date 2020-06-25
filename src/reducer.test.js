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
        });

        expect(newState.tasks).toHaveLength(1);
      });

      it('추가된 task에 id가 부여된다.', () => {
        const newState = reducer({
          newId: 1,
          taskTitle: '첫 번째 할 일',
          tasks: [],
        }, {
          type: 'addTask',
        });

        expect(newState.tasks[0].id).not.toBeNull();
        expect(newState.tasks[0].id).toBe(1);
        expect(newState.newId).toBe(1 + 1);
        expect(newState.tasks[0].title).toBe('첫 번째 할 일');
      });

      it('taskTitle이 초기화된다.', () => {
        const newState = reducer({
          newId: 1,
          taskTitle: '첫 번째 할 일',
          tasks: [],
        }, {
          type: 'addTask',
        });

        expect(newState.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it('동작하지 않는다.', () => {
        const newState = reducer({
          newId: 1,
          taskTitle: '',
          tasks: [],
        }, {
          type: 'addTask',
        });

        expect(newState.tasks).toHaveLength(0);
        expect(newState.newId).toBe(1);
      });
    });
  });
});
