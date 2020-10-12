import reducer from './reducer';

import { updateTaskTitle } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    context('with valid taskTitle', () => {
      const newTaskTitle = 'New Task';

      it('returns new state with new task title', () => {
        const previousState = {
          taskTitle: '',
        };

        const newState = reducer(previousState, updateTaskTitle(newTaskTitle));

        expect(newState.taskTitle).toBe('New Task');
      });
    });

    context('with invalid taskTitle', () => {
      const newTaskTitle = 0.555;

      it('returns previous state with unchanged title', () => {
        const previousState = {
          taskTitle: 'prevTitle',
        };

        const newState = reducer(previousState, updateTaskTitle(newTaskTitle));

        expect(newState.taskTitle).toBe(previousState.taskTitle);
      });
    });
  });
});
