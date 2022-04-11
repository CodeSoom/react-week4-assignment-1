import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    const initialState = {
      taskTitle: '',
      tasks: [],
    };
    function changeTaskTitle(taskTitle) {
      return ({
        type: 'updateTaskTitle',
        payload: {
          taskTitle,
        },
      });
    }
    it('returns new task title', () => {
      const state = reducer(initialState, changeTaskTitle('New Task'));

      expect(state.taskTitle).toBe('New Task');
    });

    it('returns new task title in korean', () => {
      const state = reducer(initialState, changeTaskTitle('새로운 테스크'));

      expect(state.taskTitle).toBe('새로운 테스크');
    });
  });
});
