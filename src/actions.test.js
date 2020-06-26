import { changeTitleAction, addTaskAction, deleteTaskAction } from './actions';

describe('actions', () => {
  context('changeTitleAction', () => {
    it('액션을 생성한다', () => {
      const expectAction = {
        type: 'CHANGE_TITLE',
        payload: {
          title: 'new Title',
        },
      };
      expect(changeTitleAction('new Title')).toEqual(expectAction);
    });
  });
  context('addTaskAction', () => {
    it('액션을 생성한다', () => {
      const expectAction = {
        type: 'ADD_TASK',
      };
      expect(addTaskAction()).toEqual(expectAction);
    });
  });

  context('deleteTaskAction', () => {
    it(' 액션을 생성한다', () => {
      const expectAction = {
        type: 'DELETE_TASK',
        payload: { id: 1 },
      };
      expect(deleteTaskAction(1)).toEqual(expectAction);
    });
  });
});
