import { addTask, deleteTask, updateTitle } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  context('when default state', () => {
    it('returns initialState', () => {
      const state = reducer();

      const { newId, taskTitle, tasks } = state;

      expect(newId).toBe(1);
      expect(taskTitle).toBe('');
      expect(tasks).toHaveLength(0);
    });
  });

  context('with not defined action', () => {
    it('returns previous state', () => {
      const previousState = {
        newId: 3,
        taskTitle: '뭔가적던중',
        tasks: [
          { id: 1, title: '운동하기' },
          { id: 1, title: '꿀잠자기' },
        ],
      };

      const notDefinedAction = {
        type: 'someMissingType',
        payload: { foo: 'bar' },
      };

      const state = reducer(previousState, notDefinedAction);

      const { newId, taskTitle, tasks } = state;

      expect(newId).toBe(3);
      expect(taskTitle).toBe('뭔가적던중');
      expect(tasks).toHaveLength(2);
    });
  });

  context('updateTaskTitle', () => {
    it('updates task title', () => {
      const state = reducer({ taskTitle: '' }, updateTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(title) {
      return reducer({ newId: 100, taskTitle: title, tasks: [] }, addTask());
    }
    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask('New Title');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).toBe(100);
        expect(state.tasks[0].title).toBe('New Title');
      });

      it('clears task title', () => {
        const state = reduceAddTask('New Title');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it('does not work', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    function reduceDeleteTask(id) {
      return reducer({ tasks: [{ id: 1, title: 'Task' }] }, deleteTask(id));
    }

    context('with existed task ID', () => {
      it('delete task', () => {
        const state = reduceDeleteTask(1);

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it('does not work', () => {
        const state = reduceDeleteTask(100);

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
