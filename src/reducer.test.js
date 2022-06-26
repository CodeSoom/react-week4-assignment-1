import reducer from './reducer';

describe('reducer', () => {
  const newId = 101;
  const taskTitle = '새로운 할 일';

  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle,
        },
      };

      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe(taskTitle);
    });
  });

  describe('addTask', () => {
    const previousState = {
      newId,
      taskTitle,
      tasks: [],
    };

    const action = {
      type: 'addTask',
      payload: {
        taskTitle,
      },
    };

    it('appends a new task with new id into tasks', () => {
      const state = reducer(previousState, action);

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].id).toBe(newId);
      expect(state.tasks[0].title).toBe(taskTitle);
    });

    it('adds 1 to newId', () => {
      const state = reducer(previousState, action);

      expect(state.newId).toBe(newId + 1);
    });

    it('makes taskTitle blank', () => {
      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('');
    });
  });
});
