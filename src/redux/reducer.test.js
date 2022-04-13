import { addTask, deleteTask, updateTaskTitle } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  context('with action.type', () => {
    describe('updateTaskTitle', () => {
      it('returns new state with a new task title', () => {
        const state = reducer({
          state: {
            taskTitle: '',
          },
          action: updateTaskTitle('New Title'),
        });

        expect(state.taskTitle).toBe('New Title');
      });
    });

    describe('addTask', () => {
      function reduceAddTask({ taskTitle }) {
        return reducer({
          state: {
            newId: 100,
            taskTitle,
            tasks: [],
          },
          action: addTask(),
        });
      }

      context('with taskTitle', () => {
        it('tasks에 새 task 추가', () => {
          const state = reduceAddTask({ taskTitle: 'New Task' });

          expect(state.tasks).toHaveLength(1);
          expect(state.tasks[0].id).not.toBeUndefined();
          expect(state.tasks[0].title).toBe('New Task');
        });

        it('새 task추가 후 taskTitle 클리어', () => {
          const state = reduceAddTask({ taskTitle: 'New Task' });

          expect(state.taskTitle).toBe('');
        });
      });

      context('with taskTitle', () => {
        it('아무일도 일어나지 않는다.', () => {
          const state = reduceAddTask({ taskTitle: '' });

          expect(state.tasks).toHaveLength(0);
        });
      });
    });

    describe('deleteTask', () => {
      context('with exist task ID', () => {
        it('tasks에서 task 삭제', () => {
          const state = reducer({
            state: {
              tasks: [{
                id: 1, title: 'Task',
              }],
            },
            action: deleteTask({ id: 1 }),
          });

          expect(state.tasks).toHaveLength(0);
        });
      });

      context('without exist task ID', () => {
        it("doesn't work", () => {
          const state = reducer({
            state: {
              tasks: [{
                id: 1, title: 'Task',
              }],
            },
            action: deleteTask({ id: 100 }),
          });

          expect(state.tasks).toHaveLength(1);
        });
      });
    });
  });

  context('without action.type', () => {
    function otherFunction({ id }) {
      return {
        type: 'otherFunction',
        payload: {
          id,
        },
      };
    }

    it('존재하지 않는 reducer실행', () => {
      const state = reducer({
        state: undefined,
        action: otherFunction({ id: 1 }),
      });

      expect(state.tasks).toHaveLength(0);
    });
  });
});
