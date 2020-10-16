import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    context('changes new task title at first time', () => {
      const state = reducer(previoutState)(updateTaskTitleAction)(updateTaskTitle);
      expect(state.taskTitle).toBe('new task');
    });
  });
});
