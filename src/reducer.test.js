import reducer from './reducer';

import {
  updateTaskTitle,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('renders input value', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('New task'));

      expect(state.taskTitle).toBe('New task');
    });
  });
});
