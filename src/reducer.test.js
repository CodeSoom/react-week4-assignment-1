import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  it('sets state as default parameter', () => {
    const state = reducer(undefined, addTask());
    const { newId, taskTitle, tasks } = state;

    expect(newId).toBe(100);
    expect(taskTitle).toBe('');
    expect(tasks).toHaveLength(0);
  });
  context('without action type', () => {
    it("doesn't change state", () => {
      const state = reducer({
        taskTitle: '상태없음',
      }, { type: null });

      expect(state.taskTitle).toBe('상태없음');
    });
  });

  context('with action type', () => {
    describe('updateTaskTitle', () => {
      it('changes task title', () => {
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
        it('appends a new task into task', () => {
          const state = reduceAddTask('New Task');

          expect(state.tasks).toHaveLength(1);
          expect(state.tasks[0].id).not.toBeUndefined();
          expect(state.tasks[0].title).toBe('New Task');
        });

        it('clears task title', () => {
          const state = reduceAddTask('New Task');
          // expect(state.tasks).toHaveLength(1);
          expect(state.taskTitle).toBe('');
        });
      });

      context('without task title', () => {
        it('doesnt work', () => {
          const state = reduceAddTask('');

          expect(state.tasks).toHaveLength(0);
        });
      });
    });

    describe('deleteTaskTitle', () => {
      context('with existed task ID', () => {
        it('remove the task from tasks', () => {
          const state = reducer({
            tasks: [
              { id: 1, title: 'Task' },
            ],
          }, deleteTask(1));

          expect(state.tasks).toHaveLength(0);
        });
      });

      context('without existed task ID', () => {
        it('it doesnt work', () => {
          const state = reducer({
            tasks: [
              { id: 1, title: 'Task' },
            ],
          }, deleteTask(100));

          expect(state.tasks).toHaveLength(1);
        });
      });
    });
  });
});
