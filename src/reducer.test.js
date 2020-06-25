import reducer from './reducer';

import { changeTitleAction } from './actions';

describe('reducer', () => {
  it('기본적으로 initialState를 반환한다.', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });
  });

  describe('changeTitleAction는', () => {
    it('액션을 생성한다.', () => {
      const expectAction = {
        type: 'CHANGE_TITLE',
        payload: {
          title: 'new Title',
        },
      };
      expect(changeTitleAction('new Title')).toEqual(expectAction);
    });

    it('변경된 taskTitle을 갖는 새로운 state를 반환한다.', () => {
      const state = reducer(
        {
          taskTitle: '',
        },
        changeTitleAction('new Title'),
      );
      expect(state.taskTitle).toEqual('new Title');
    });
  });
});
