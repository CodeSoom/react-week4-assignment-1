import reducer from './reducer';

import tasks from '../__fixture__/data';

function deleteTaskReducer() {
  return {
    tasks: tasks.filter((task) => task.id !== 1),
  };
}

describe('reducer', () => {
  describe('changeTitle', () => {
    it('change a new task title', () => {
      const prevState = {
        taskTitle: '',
        tasks: [],
      };

      const action = {
        type: 'changeTitle',
        payload: {
          taskTitle: 'New Title',
        },
      };

      const newState = reducer(prevState, action);

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

        const action = {
          type: 'addTask',
        };

        const newState = reducer(prevState, action);

        expect(newState.taskTitle).toBe('');
      });

      it('appends a new task into tasks', () => {
        const prevState = {
          newId: 100,
          taskTitle: '할 일4',
          tasks: [],
        };

        const action = {
          type: 'addTask',
        };

        const newState = reducer(prevState, action);

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

        const action = {
          type: 'addTask',
        };

        const newState = reducer(prevState, action);

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

        const action = {
          type: 'deleteTask',
          payload: {
            id: 1,
          },
        };

        const newState = deleteTaskReducer(prevState, action);

        expect(newState.tasks).toHaveLength(tasks.length - 1);
      });
    });
    context('without task ID', () => {
      it('happens nothing', () => {});
    });
  });
});
