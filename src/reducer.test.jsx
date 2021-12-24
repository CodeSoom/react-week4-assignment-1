import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

const initialState = {
  newId: 1,
  taskTitle: '',
  tasks: [],
};

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const { taskTitle } = reducer({ ...initialState }, updateTaskTitle('new task'));

      expect(taskTitle).toBe('new task');
    });
  });

  describe('addTask', () => {
    it('adds a new task to tasks', () => {
      const { tasks } = reducer(
        {
          ...initialState,
          taskTitle: 'new task',
        },
        addTask(),
      );

      expect(tasks[0].title).toBe('new task');
      expect(tasks).toHaveLength(1);
    });
  });

  describe('deleteTask', () => {
    context('with an existing task id', () => {
      it('removes a task from tasks', () => {
        const { tasks } = reducer(
          {
            ...initialState,
            tasks: [
              { id: 1, title: 'first task' },
              { id: 2, title: 'second task' },
            ],
          },
          deleteTask(1),
        );

        expect(tasks).toHaveLength(1);
      });
    });

    context('with a non-existent task id', () => {
      it('removes a task from tasks', () => {
        const { tasks } = reducer(
          {
            ...initialState,
            tasks: [
              { id: 1, title: 'first task' },
              { id: 2, title: 'second task' },
            ],
          },
          deleteTask(100),
        );

        expect(tasks).toHaveLength(2);
      });
    });
  });
});
