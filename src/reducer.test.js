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
  });

  describe('addTask', () => {
    function addTaskAction() {
      return ({
        type: 'addTask',
      });
    }

    context('with task title', () => {
      const previousState = {
        id: 100,
        taskTitle: 'New Task',
        tasks: [],
      };

      it('appends a new task into tasks', () => {
        const state = reducer(previousState, addTaskAction());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clear task title', () => {
        const state = reducer(previousState, addTaskAction());

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      const previousState = {
        id: 100,
        taskTitle: '',
        tasks: [],
      };

      it("dosen't working", () => {
        const state = reducer(previousState, addTaskAction());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    const previousState = {
      id: 102,
      taskTitle: 'New Task',
      tasks: [
        { id: 100, title: 'New Task#1' },
        { id: 101, title: 'New Task#2' },
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

    context('with existed task id', () => {
      it('remove the task into tasks', () => {
        const state = reducer(previousState, deleteTaskAction(100));

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks).not.toContainEqual({ id: 100, title: 'New Task#1' });
      });
    });

    context('without existed task id', () => {
      it("doesn't working", () => {
        const state = reducer(previousState, deleteTaskAction(102));

        expect(state.tasks).toHaveLength(2);
        expect(state.tasks).toContainEqual({ id: 100, title: 'New Task#1' });
        expect(state.tasks).toContainEqual({ id: 101, title: 'New Task#2' });
      });
    });
  });
});
