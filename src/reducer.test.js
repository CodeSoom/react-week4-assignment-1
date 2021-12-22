// updateTaskTitle
// addTask
// deleteTask
// 가 작동하는가?
// 특히
// addTask는 TaskTitle===''일 떄 작동하지 않는다.
// deleteTask는 wrongId일떄 작동하지 않는다.

import { addTask, deleteTask, updateTaskTitle } from './action';
import reducer from './reducer';

describe('reducer', () => {
  it('updateTaskTitle', () => {
    const state = {
      newId: 100,
      taskTitle: '',
      tasks: [],
    };
    const newState = reducer(state, updateTaskTitle('new TaskTitle'));

    expect(newState.taskTitle).toBe('new TaskTitle');
  });
});
describe('addTask', () => {
  context('taskTtle이 있을 때', () => {
    it('작동 한다.', () => {
      const state = {
        newId: 100,
        taskTitle: 'new TaskTitle',
        tasks: [],
      };
      const newState = reducer(state, addTask());
      expect(newState.tasks).toHaveLength(1);
    });
  });
  context('taskTitle이 없을 때', () => {
    it('작동 안한다.', () => {
      const state = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };
      const newState = reducer(state, addTask());
      expect(newState.tasks).toHaveLength(0);
    });
  });
});

describe('deleteTask', () => {
  context('wrongId일때', () => {
    it('작동안한다.', () => {
      const state = {
        newId: 100,
        taskTitle: '',
        tasks: [
          {
            id: 100,
            title: '독서',
          }],
      };
      const newState = reducer(state, deleteTask(200));
      expect(newState.tasks).toHaveLength(1);
    });
  });
  context('rigthId일때', () => {
    it('작동한다.', () => {
      const state = {
        newId: 100,
        taskTitle: '',
        tasks: [
          {
            id: 100,
            title: '독서',
          }],
      };
      const newState = reducer(state, deleteTask(100));
      expect(newState.tasks).toHaveLength(0);
    });
  });
});
