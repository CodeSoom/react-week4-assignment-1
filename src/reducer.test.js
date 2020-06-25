import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './action';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    context('with new task title', () => {
      it('returns new state', () => {
        const newState = reducer({
          taskTitle: '',
        }, updateTaskTitle('New task'));

        expect(newState.taskTitle).toBe('New task');
      });
    });
  });

  describe('addTask', () => {
    function recudeAddTask(taskTitle) {
      return reducer({
        newId: 1,
        taskTitle,
        tasks: [],
      }, addTask());
    }

    context('with task title', () => {
      it('tasks에 새로운 task가 추가된다.', () => {
        const newState = recudeAddTask('첫 번째 할 일');

        expect(newState.tasks).toHaveLength(1);
      });

      it('추가된 task에 id가 부여된다.', () => {
        const newState = recudeAddTask('첫 번째 할 일');

        expect(newState.tasks[0].id).not.toBeNull();
        expect(newState.tasks[0].id).toBe(1);
        expect(newState.newId).toBe(1 + 1);
        expect(newState.tasks[0].title).toBe('첫 번째 할 일');
      });

      it('taskTitle이 초기화된다.', () => {
        const newState = recudeAddTask('첫 번째 할 일');

        expect(newState.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it('동작하지 않는다.', () => {
        const newState = recudeAddTask('');

        expect(newState.tasks).toHaveLength(0);
        expect(newState.newId).toBe(1);
      });
    });
  });

  describe('delete task', () => {
    context('with existed task id', () => {
      it('task가 삭제된다.', () => {
        const newState = reducer({
          tasks: [
            {
              id: 1,
              title: '첫 번째 할 일',
            },
          ],
        }, deleteTask(1));

        expect(newState.tasks).toHaveLength(0);
      });
    });

    context('without existed task id', () => {
      it("doesn't work", () => {
        const newState = reducer({
          tasks: [
            {
              id: 1,
              title: '첫 번째 할 일',
            },
          ],
        }, deleteTask(2));

        expect(newState.tasks).toHaveLength(1);
      });
    });
  });

  context('without existed action', () => {
    const state = reducer({
      newId: 1,
      taskTitle: '',
      tasks: [],
    }, {
      type: 'notExistedAction',
    });

    expect(state).toEqual({
      newId: 1,
      taskTitle: '',
      tasks: [],
    });
  });
});
