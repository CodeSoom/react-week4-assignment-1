import { updateTaskTitle, addTask, deleteTask } from './actions';

test('create updateTaskTitle action', () => {
  // given
  const taskTitle = '새로운 할 일';
  // when
  const action = updateTaskTitle('새로운 할 일');
  // then
  expect(action.type).toBe('updateTaskTitle');
  expect(action.payload.taskTitle).toBe(taskTitle);
});

test('create addTask action', () => {
  // when
  const action = addTask();
  // then
  expect(action.type).toBe('addTask');
  expect(action.payload).toEqual({});
});

test('create deleteTask action', () => {
  // given
  const id = 1234;
  // when
  const action = deleteTask(id);
  // then
  expect(action.type).toBe('deleteTask');
  expect(action.payload.id).toBe(id);
});
