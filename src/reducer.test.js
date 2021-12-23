import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

// reducer test
// [updateTaskTitle]
//  - renders new state with new task title
// [addTask]
// 1. with task title
//  - renders new state with new task
//  - renders task title with blank
// [deleteTask]
//  - remove the task from tasks

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('renders new state with new task title', () => {
      const newState = reducer({
        taskTitle: '',
      }, updateTaskTitle('새로 할 일'));

      expect(newState.taskTitle).toBe('새로 할 일');
    });
  });

  describe('addTask', () => {
    context('with task title', () => {
      it('renders new state with new task', () => {
        const newState = reducer({
          newId: 100,
          taskTitle: '운동가기',
          tasks: [],
        }, addTask());

        expect(newState.tasks).toHaveLength(1);
        expect(newState.tasks[0].id).toBe(100);
        expect(newState.tasks[0].title).toBe('운동가기');
      });
    });
    it('renders task title with blank', () => {
      const newState = reducer({
        newId: 100,
        taskTitle: '운동가기',
        tasks: [],
      }, addTask());

      expect(newState.taskTitle).toBe('');
    });
  });

  describe('deleteTask', () => {
    it('remove the task from tasks', () => {
      const newState = reducer({
        tasks: [{ id: 100, title: '운동가기' }],
      }, deleteTask(100));

      expect(newState.tasks).toHaveLength(0);
    });
  });
});
