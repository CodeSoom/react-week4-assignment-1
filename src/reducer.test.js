import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    const previousState = {
      id: 100,
      taskTitle: '',
      tasks: [],
    };

    function updateTaskTitleAction(taskTitle) {
      return ({
        type: 'updateTaskTitle',
        payload: {
          taskTitle,
        },
      });
    }
    it('returns new task title', () => {
      const state = reducer(previousState, updateTaskTitleAction('New Task'));

      expect(state.taskTitle).toBe('New Task');
    });

    it('returns new task title in korean', () => {
      const state = reducer(previousState, updateTaskTitleAction('새로운 테스크'));

      expect(state.taskTitle).toBe('새로운 테스크');
    });
  });

  describe('addTask', () => {
    const previousState = {
      id: 100,
      taskTitle: 'New Task',
      tasks: [],
    };

    function addTaskAction() {
      return ({
        type: 'addTask',
      });
    }

    it('returns new task', () => {
      const state = reducer(previousState, addTaskAction());

      expect(state.tasks).toHaveLength(1);
    });
  });

  describe('deleteTask', () => {
    const previousState = {
      id: 102,
      taskTitle: 'New Task',
      tasks: [
        { id: 100, taskTitle: 'New Task#1' },
        { id: 101, taskTitle: 'New Task#2' },
      ],
    };

    function deleteTaskAction(taskId) {
      return ({
        type: 'deleteTask',
        payload: {
          id: taskId,
        },
      });
    }

    context('with data', () => {
      it('returns new task', () => {
        const state = reducer(previousState, deleteTaskAction(100));

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks).toEqual([{ id: 101, taskTitle: 'New Task#2' }]);
      });
    });
  });
});
