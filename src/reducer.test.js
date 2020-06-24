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

  describe('deleteTask', () => {
    context('with existed task id', () => {
      const previousState = {
        tasks: [
          {
            id: 100,
            title: 'Delete Task?',
          },
        ],
      };
      const action = {
        type: 'deleteTask',
        payload: {
          id: 100,
        },
      };
      const state = reducer(previousState, action);
      
      expect(state.tasks).toHaveLength(0);
    });

    context('without existed task id', () => {
      const previousState = {
        tasks: [
          {
            id: 100,
            title: 'Delete Task?',
          },
        ],
      };
      const action = {
        type: 'deleteTask',
        payload: {
          id: 1,
        },
      };
      const state = reducer(previousState, action);

      expect(state.tasks).toHaveLength(1);
    });
  });
});