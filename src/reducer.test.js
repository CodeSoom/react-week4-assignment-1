import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  test('initialState', () => {
    const state = reducer(undefined, { type: 'addTask' });

    expect(state).toEqual({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });
  });

  test('unexist action', () => {
    const state = reducer({}, { type: 'unexist action' });

    expect(state).toEqual({});
  });

  test('updateTaskTitle action', () => {
    const state = reducer({ taskTitle: '' }, updateTaskTitle('Update Task Title!'));

    expect(state.taskTitle).toBe('Update Task Title!');
  });

  describe('addTask action', () => {
    context('with task title', () => {
      const state = reducer({
        newId: 100,
        taskTitle: 'Add Task',
        tasks: [],
      }, addTask());

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].id).not.toBeUndefined();
      expect(state.tasks[0].title).toBe('Add Task');
      expect(state.taskTitle).toBe('');
    });

    context('without task title', () => {
      const state = reducer({
        newId: 100,
        taskTitle: '',
        tasks: [],
      }, addTask());

      expect(state.tasks).toHaveLength(0);
    });
  });

  describe('deleteTask action', () => {
    context('with existed task id', () => {
      const state = reducer({
        tasks: [
          {
            id: 100,
            title: 'Delete Task?',
          },
        ],
      }, deleteTask(100));

      expect(state.tasks).toHaveLength(0);
    });

    context('without existed task id', () => {
      const state = reducer({
        tasks: [
          {
            id: 100,
            title: 'Delete Task?',
          },
        ],
      }, deleteTask(1));

      expect(state.tasks).toHaveLength(1);
    });
  });
});
