import context from 'jest-plugin-context';
import reducer from './reducer';

import { changeTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('changeTaskTitle', () => {
    it('할 일을 변경한다.', () => {
      const state = reducer(
        {
          taskTitle: '',
        },
        changeTaskTitle('New Title'),
      );

      expect(state.taskTitle).toBe('New Title');
    });

    describe('addTask', () => {
      function reduceAddTask(taskTitle) {
        return reducer(
          {
            newId: 100,
            taskTitle,
            tasks: [],
          },
          addTask(),
        );
      }

      context('할 일이 있을 경우', () => {
        it('할 일을 포함하여 새 목록을 만든다.', () => {
          const state = reduceAddTask('New Task');

          expect(state.tasks).toHaveLength(1);
          expect(state.tasks[0].id).not.toBeUndefined();
          expect(state.tasks[0].title).toBe('New Task');
        });

        it('task Title을 빈 값으로 만든다.', () => {
          const state = reduceAddTask('New Task');

          expect(state.taskTitle).toBe('');
        });
      });

      context('할 일이 없을 경우', () => {
        it('동작하지 않는다.', () => {
          const state = reduceAddTask('');

          expect(state.tasks).toHaveLength(0);
        });
      });
    });
  });

  describe('deleteTask', () => {
    context('task의 id가 존재할 경우', () => {
      it('목록에서 할 일을 지운다.', () => {
        const state = reducer(
          {
            tasks: [{ id: 1, title: 'Task' }],
          },
          deleteTask(1),
        );

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('task의 id가 존재하지 않을 경우', () => {
      it('목록에서 할 일을 지우지 않는다.', () => {
        const state = reducer(
          {
            tasks: [{ id: 1, title: 'Task' }],
          },
          deleteTask(-1),
        );

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  describe('action의 type이 일치하지 않는 경우', () => {
    it('아무 일도 일어나지 않는다.', () => {
      const prevState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };

      const action = {
        type: 'non-existed action type',
      };

      const state = reducer(prevState, action);

      expect(state).toBe(prevState);
    });
  });

  describe('아무런 동작을 하지 않는 경우', () => {
    it('아무 일도 일어나지 않는다.', () => {
      const state = reducer();

      expect(state.taskTitle).toBe('');
      expect(state.tasks).toHaveLength(0);
    });
  });
});
