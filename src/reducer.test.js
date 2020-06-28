import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './action';

describe('reducer', () => {
  function reduceAddTask(taskTitle) {
    const previousState = {
      newId: 100,
      taskTitle,
      tasks: [],
    };
    return reducer(previousState, addTask());
  }
  it('start with initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });
  });

  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const previousState = {
        taskTitle: '',
      };
      const state = reducer(previousState, updateTaskTitle('New Work!'));

      expect(state.taskTitle).toBe('New Work!');
    });
  });

  describe('addTask', () => {
    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask('강의 열심히 듣기!');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('강의 열심히 듣기!');
      });
      it('clears task title', () => {
        const state = reduceAddTask('강의 열심히 듣기!');

        expect(state.taskTitle).toBe('');
      });
    });
    context('without task title', () => {
      it("doesn't work", () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('remove the task form tasks', () => {
        const previousState = {
          tasks: [
            { id: 1, title: 'task1' },
          ],
        };
        const state = reducer(previousState, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });
    context('with existed task ID', () => {
      it("dosen't remove", () => {
        const previousState = {
          tasks: [
            { id: 1, title: 'task1' },
          ],
        };
        const state = reducer(previousState, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
