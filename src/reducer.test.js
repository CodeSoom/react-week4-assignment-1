import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes a task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('아무것도 안 하기'));

      expect(state.taskTitle).toBe('아무것도 안 하기');
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
      it('adds a new task', () => {
        const state = reduceAddTask('아무것도 안 하기');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('아무것도 안 하기');
      });
    });

    context('without task title', () => {
      it('nothing happens', () => {
        const state = reduceAddTask();

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('existent task id', () => {
      it('delete a task', () => {
        const state = reducer({
          tasks: [
            { id: 100, title: '아무것도 안 하기' },
          ],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('non-existent task id', () => {
      it('nothing happens', () => {
        const state = reducer({
          tasks: [
            { id: 100, title: '아무것도 안 하기' },
          ],
        }, deleteTask(999));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  it('initialState', () => {
    const state = reducer();

    expect(state.newId).toBe(100);
    expect(state.taskTitle).toBe('');
    expect(state.tasks).toHaveLength(0);
  });
});
