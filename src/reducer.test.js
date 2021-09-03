import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,

} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('chages task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer({
        newId: 100,
        taskTitle,
        tasks: [],
      }, addTask());
    }

    context('with task title', () => {
      it('adds a new task into tasks', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe('New Task');
        expect(state.tasks[0].id).not.toBeUndefined();
      });

      it('clears task title', () => {
        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('empty task title', () => {
      it('does not work', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    function reduceDeleteTask(id) {
      return reducer({
        tasks: [
          { id: 1, title: 'Task' },
        ],
      }, deleteTask(id));
    }

    context('with existed task id', () => {
      it('remove the task from tasks', () => {
        const state = reduceDeleteTask(1);

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task id', () => {
      it('does not work', () => {
        const state = reduceDeleteTask(100);

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  describe('empty taks', () => {
    const state = reducer(
      undefined, {type: '', payload: {} },
    );
      it('returns empty state', () => {
        expect(state).toBe(state);
      })
  })
});
