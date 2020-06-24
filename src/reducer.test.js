import reducer from './reducer';

describe('reducer', () => {
  test('updateTaskTitle', () => {
    const previousState = {
      taskTitle: '',
    };
    const action = {
      type: 'updateTaskTitle',
      payload: {
        taskTitle: 'Update Task Title!',
      },
    };
    const state = reducer(previousState, action);
    
    expect(state.taskTitle).toBe('Update Task Title!');
  });
});