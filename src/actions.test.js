import {
  changeTitle, addTask, deleteTask,
} from './actions';

test('changeTitle', () => {
  const result = changeTitle('새로운 할 일');
  expect(result.type).toBe('changeTitle');
  expect(result.payload.taskTitle).toBe('새로운 할 일');
});

test('addTask', () => {
  const result = addTask();
  expect(result.type).toBe('addTask');
  expect(result.payload).toBeUndefined();
});

test('deleteTask', () => {
  const result = deleteTask(1);
  expect(result.type).toBe('deleteTask');
  expect(result.payload.id).toBe(1);
});
