import reducer from './reducer';

describe('reducer', () => {
  test('updateTaskTitle', () => {
    const taskTitle = reducer();
    
    expect(taskTitle).toBe('Update Task Title!');
  });
});