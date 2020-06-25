import reducer from './reducer';

import { changeTitleAction, addTaskAction, deleteTaskAction } from './actions';

describe('reducer', () => {
  it('기본적으로 initialState를 반환한다', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });
  });

  describe('changeTitleAction는', () => {
    it('액션을 생성한다', () => {
      const expectAction = {
        type: 'CHANGE_TITLE',
        payload: {
          title: 'new Title',
        },
      };
      expect(changeTitleAction('new Title')).toEqual(expectAction);
    });

    it('변경된 taskTitle을 갖는 새로운 state를 반환한다', () => {
      const state = reducer(
        {
          taskTitle: '',
        },
        changeTitleAction('new Title'),
      );
      expect(state.taskTitle).toEqual('new Title');
    });
  });

  describe('addTaskAction은', () => {
    it('액션을 생성한다', () => {
      const expectAction = {
        type: 'ADD_TASK',
      };
      expect(addTaskAction()).toEqual(expectAction);
    });

    context('taskTitle 값이 있으면,', () => {
      it('새로운 task가 추가된 state를 반환한다', () => {
        const state = reducer(
          {
            newId: 0,
            taskTitle: 'new task',
            tasks: [],
          },
          addTaskAction(),
        );

        expect(state.tasks).toHaveLength(1);
      });
    });
    context('taskTitle 값이 없으면,', () => {
      it('기존 state를 반환한다', () => {
        const state = reducer(
          {
            newId: 0,
            taskTitle: '',
            tasks: [],
          },
          addTaskAction(),
        );

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTaskAction은', () => {
    it('액션을 생성한다', () => {
      const expectAction = {
        type: 'DELETE_TASK',
        payload: { id: 1 },
      };
      expect(deleteTaskAction(1)).toEqual(expectAction);
    });
  });
});
