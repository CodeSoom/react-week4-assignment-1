import reducer from './reducer';

describe('reducer', () => {
  test('updateTaskTitle', () => {
    const taskTitle = 'Update Task Title!';
    expect(taskTitle).toBe('Update Task Title!');
  });
});