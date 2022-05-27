import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('change task title', () => {
      const state = reducer({
        taskTitle: 'previous title',
      }, updateTaskTitle('new Title'));
      expect(state.taskTitle).toBe('new Title');
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
    context('with taskTitle', () => {
      it('append a new task into tasks', () => {
        const state = reduceAddTask('new Task');

        expect(state.tasks).toHaveLength(1);

        expect(state.tasks[0].title).toBe('new Task');
        expect(state.tasks[0].id).not.toBeNull();
      });

      it('clears taskTitle', () => {
        const state = reduceAddTask('new Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it("doesn't work", () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task id', () => {
      it('remove task from tasks', () => {
        const state = reducer({
          tasks: [{
            id: 1,
            title: 'task',
          }],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task id', () => {
      it("doesn't work", () => {
        const state = reducer(
          {
            tasks: [
              {
                id: 1,
                title: 'task',
              },
            ],
          },
          deleteTask(100),
        );
        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
