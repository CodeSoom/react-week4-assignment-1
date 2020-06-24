import reducer from './reducer';

import tasks from '../__fixture__/data';

import { changeTitle, addTask, deleteTask } from './action';

describe('reducer', () => {
  describe('changeTitle', () => {
    it('change a new task title', () => {
      const prevState = {
        taskTitle: '',
        tasks: [],
      };

      const newState = reducer(prevState, changeTitle('New Title'));

      expect(newState.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      it('clear task title', () => {
        const prevState = {
          newId: 100,
          taskTitle: '할 일4',
          tasks: [],
        };
        const newState = reducer(prevState, addTask());

        expect(newState.taskTitle).toBe('');
      });

      it('appends a new task into tasks', () => {
        const prevState = {
          newId: 100,
          taskTitle: '할 일4',
          tasks: [],
        };

        const newState = reducer(prevState, addTask());

        expect(newState.tasks).toHaveLength(1);
        expect(newState.tasks[0].id).not.toBeUndefined();
        expect(newState.tasks[0].title).toBe('할 일4');
      });
    });

    context('without taskTitle', () => {
      it('happens nothing', () => {
        const prevState = {
          newId: 100,
          taskTitle: '',
          tasks: [],
        };

        const newState = reducer(prevState, addTask());

        expect(newState.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with task ID', () => {
      it('remove the task from tasks', () => {
        const prevState = {
          newId: 100,
          taskTitle: '',
          tasks,
        };

        const newState = reducer(prevState, deleteTask(1));

        expect(newState.tasks).toHaveLength(tasks.length - 1);
      });
    });
    context('without task ID', () => {
      it('happens nothing', () => {
        const prevState = {
          newId: 100,
          taskTitle: '',
          tasks,
        };

        const newState = reducer(prevState, deleteTask(-1));

        expect(newState.tasks).toHaveLength(tasks.length);
      });
    });
  });

  describe('non-exited action type', () => {
    it('change a new task title', () => {
      const prevState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };

      const action = {
        type: 'non-exited action type',
      };

      const newState = reducer(prevState, action);

      expect(newState).toBe(prevState);
    });
  });

  describe('without parameter', () => {
    const newState = reducer();

    it('newId is 100', () => {
      expect(newState.newId).toBe(100);
    });

    it('taskTitle is empty', () => {
      expect(newState.taskTitle).toBe('');
    });

    it('tasks is empty', () => {
      expect(newState.tasks).toHaveLength(0);
    });
  });
});
