import reducer from './reducer';

import actions, { CHANGE_TITLE, ADD_TASK } from './actions';

describe('reducer', () => {
  describe(CHANGE_TITLE, () => {
    it('changes task title', () => {
      const previousState = {
        taskTitle: '',
      };
      const action = actions.changeTitle('밥먹기');
      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('밥먹기');
    });
  });

  describe(ADD_TASK, () => {
    it('add Task to the list', () => {
      const previousState = {
        newId: 100,
        taskTitle: '독서하기',
        tasks: [],
      };
      const action = actions.addTask();
      const state = reducer(previousState, action);

      expect(state.tasks).toMatchObject([{ id: 100, title: '독서하기' }]);
    });
  });
});
