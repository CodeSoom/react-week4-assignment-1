import reducer from './reducer';

describe('reducer', () => {
  test('updateTaskTitle', () => {
    const previousState = {
      taskTitle: '',
    };
    const action = {
      type: 'updateTaskTitle',
      payload: {
        taskTitle: 'Update Task Title!',
      },
    };
    const state = reducer(previousState, action);
    
    expect(state.taskTitle).toBe('Update Task Title!');
  });

  describe('addTask', () => {
    context('with task title', () => {
      const previousState = {
        newId: 100,
        taskTitle: 'Add Task',
        tasks: [],
      };
      const action = {
        type: 'addTask',
      };
      const state = reducer(previousState, action);
  
      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].id).not.toBeUndefined();
      expect(state.tasks[0].title).toBe('Add Task');
      expect(state.taskTitle).toBe('');
    });
    context('without task title', () => {
      const previousState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };
      const action = {
        type: 'addTask',
      };
      const state = reducer(previousState, action);
      
      expect(state.tasks).toHaveLength(0);
    });
  });
});