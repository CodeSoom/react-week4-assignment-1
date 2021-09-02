import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  it('일치하는 action type이 없으면 이전 state를 반환한다.', () => {
    const previouseState = {
      newId: 100,
      taskTitle: 'New Title',
      tasks: [],
    };

    const state = reducer(previouseState, { type: 'mockActionType' });

    expect(state).toBe(previouseState);
  });

  it('state를 넘겨주지 않으면 initialState를 사용한다.', () => {
    const initialState = {
      nextId: 100,
      taskTitle: '',
      tasks: [],
    };

    const state = reducer(undefined, { type: 'mockActionType' });

    expect(state).toStrictEqual(initialState);
  });

  describe('updateTaskTitle', () => {
    it('taskTitle이 New Title로 업데이트 된다.', () => {
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

    context('taskTitle이 비어있지 않으면', () => {
      it('task가 추가된다.', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('taskTitle이 비워진다.', () => {
        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('taskTitle가 비어있다면', () => {
      it('task가 추가되지 않는다.', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('ID가 존재하는 task가 있다면', () => {
      it('해당 ID task가 제거된다.', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('ID가 존재하는 task가 없다면', () => {
      it('task가 제거되지 않는다.', () => {
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
