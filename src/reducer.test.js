import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('updates title of task', () => {
      const state = {
        taskTitle: '',
      };

      const action = {
        type: 'UpdateTaskTitle',
        payload: {
          taskTitle: 'newTitle',
        },
      };

      const newState = reducer(state, action);

      expect(newState.taskTitle).toBe('newTitle');
    });
  });
  describe('addTask', () => {
    it('adds new task to tasks', () => {
      const state = {
        taskTitle: 'new Title',
        newId: 100,
        tasks: [],
      };

      const action = {
        type: 'AddTask',
      };

      const newState = reducer(state, action);

      const { tasks } = newState;
      expect(tasks).toHaveLength(1);
      expect(tasks[0]).toEqual({ id: 100, title: 'new Title' });
    });
  });
  describe('deleteTask', () => {

  });
});
