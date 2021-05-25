import reducer from '.';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'New Title',
        },
      };

      const { taskTitle } = reducer(previousState, action);

      expect(taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      it('appends a new task into tasks', () => {
        const previousState = {
          newId: 100,
          taskTitle: '',
          tasks: [],
        };

        const action = { type: 'addTask' };

        const { tasks } = reducer(previousState, action);

        expect(tasks).toHaveLength(1);
        expect(tasks[0].id).not.toBeUndefined();
        expect(tasks[0].title).toBe('뭐라도 하기');
      });

      it('clears taskTitle', () => {
        const previousState = {
          newId: 100,
          taskTitle: '',
          tasks: [],
        };

        const action = { type: 'addTask' };

        const { taskTitle } = reducer(previousState, action);

        expect(taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it('doesn\'t work', () => {
        const previousState = {
          newId: 100,
          taskTitle: '',
          tasks: [],
        };

        const action = { type: 'addTask' };

        const { tasks } = reducer(previousState, action);

        expect(tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    it('remove the task from tasks', () => {
      const previousState = {
        newId: 100,
        taskTitle: '',
        tasks: [
          {
            id: 1,
            title: 'Task',
          },
        ],
      };

      const { tasks } = previousState;

      const action = {
        type: 'deleteTask',
        payload: {
          id: tasks[0].id,
        },
      };

      const { tasks: todos } = reducer(previousState, action);

      expect(todos).toHaveLength(0);
    });
  });
});
