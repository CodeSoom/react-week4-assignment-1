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
    const previousState = {
      taskTitle: 'Add Task',
      tasks: [],
    };
    const action = {
      type: 'addTask',
    };
    const state = reducer(previousState, action);

    expect(state.tasks).toHaveLength(1);
    expect(state.tasks[0].title).toBe('Add Task');
  });
});