import reducer from './reducer';

import actions, { CHANGE_TITLE } from './actions';

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
});
