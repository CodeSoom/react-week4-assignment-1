import { updateTaskTitle } from './actions';

describe('actions', () => {
  test('updateTaskTitle Action', () => {
    const taskTitle = 'Update Task Title Action!';

    const action = updateTaskTitle(taskTitle);

    expect(action.type).toBe('updateTaskTitle');
    expect(action.payload.title).toBe(taskTitle);
  });
});
