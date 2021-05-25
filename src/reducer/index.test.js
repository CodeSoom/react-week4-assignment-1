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

        const { newId, tasks } = previousState;

        const action = {
          type: 'addTask',
          payload: {
            newId: newId + 1,
            taskTitle: '뭐라도 하기',
            tasks,
          },
        };

        const { tasks: todos } = reducer(previousState, action);

        expect(todos).toHaveLength(1);
        expect(todos[0].id).not.toBeUndefined();
        expect(todos[0].title).toBe('뭐라도 하기');
      });

      it('clears taskTitle', () => {
        const previousState = {
          newId: 100,
          taskTitle: '',
          tasks: [],
        };

        const { newId, tasks } = previousState;

        const action = {
          type: 'addTask',
          payload: {
            newId: newId + 1,
            taskTitle: '뭐라도 하기',
            tasks,
          },
        };

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

        const { newId, tasks } = previousState;

        const action = {
          type: 'addTask',
          payload: {
            newId: newId + 1,
            taskTitle: '',
            tasks,
          },
        };

        const { tasks: todos } = reducer(previousState, action);

        expect(todos).toHaveLength(0);
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
