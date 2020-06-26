import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  context('state가 없으면', () => {
    it('처음 상태를 사용한다.', () => {
      const initialState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };

      const newState = reducer(undefined);
      expect(newState).toEqual(initialState);
    });
  });

  context('action이 없는 경우', () => {
    it('상태에 변화가 없다.', () => {
      const newState = reducer({
        newId: 100,
        taskTitle: '',
        tasks: [],
      });

      expect(newState.newId).toBe(100);
      expect(newState.taskTitle).toBe('');
      expect(newState.tasks).toHaveLength(0);
    });
  });
  context('action이 있는 경우', () => {
    context('updateTaskTitle', () => {
      it('taskTitle을 바꾼다.', () => {
        const newState = reducer({
          taskTitle: '',
        }, updateTaskTitle('New Task'));

        expect(newState.taskTitle).toBe('New Task');
      });
    });

    context('addTask', () => {
      function reduceAddTask(taskTitle) {
        return reducer({
          newId: 1,
          taskTitle,
          tasks: [],
        }, addTask());
      }
      context('할 일이 있으면', () => {
        it('할 일을 추가한다.', () => {
          const newState = reduceAddTask('New Task');

          expect(newState.tasks).toHaveLength(1);
          expect(newState.tasks[0].id).not.toBeUndefined();
          expect(newState.tasks[0].title).toBe('New Task');
        });

        it('추가한 뒤 초기화 한다', () => {
          const newState = reduceAddTask('New Task');
          expect(newState.taskTitle).toBe('');
        });
      });

      context('할 일이 없으면', () => {
        it('아무것도 추가되지 않는다.', () => {
          const newState = reduceAddTask('');
          expect(newState.tasks).toHaveLength(0);
        });
      });
    });

    context('deleteTask', () => {
      it('할 일 목록에서 삭제한다.', () => {
        const newState = reducer({
          newId: 2,
          taskTitle: '',
          tasks: [
            { id: 1, title: 'New Task' },
          ],
        }, deleteTask(1));
        expect(newState.tasks).toHaveLength(0);
      });
    });
  });
});
