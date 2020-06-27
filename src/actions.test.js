import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('actions', () => {
  test('updateTaskTitle Action', () => {
    const taskTitle = 'Update Task Title Action!';

    const action = updateTaskTitle(taskTitle);

    expect(action.type).toBe('updateTaskTitle');
    expect(action.payload.title).toBe(taskTitle);
  });

  test('addTask Action', () => {
    const action = addTask();

    expect(action.type).toBe('addTask');
    expect(action.payload).toBeNull();
  });

  test('deleteTask Action', () => {
    const action = deleteTask(1);

    expect(action.type).toBe('deleteTask');
    expect(action.payload.id).toBe(1);
  });
});
