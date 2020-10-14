import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    const state = reducer(previdousState, action);

    expect(state.taskTitle).toBe('New Title');
  });
});