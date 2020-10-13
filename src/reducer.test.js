import reducer from './reducer';

import { updateTaskTitle } from './actions';

describe('reducer', () => {
  it('returns initial state with undefined state', () => {
    const initialState = ({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });

    expect(reducer()).toEqual(initialState);
  });

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

      it('returns previous state', () => {
        const previousState = {
          taskTitle: 'prevTitle',
        };

        const newState = reducer(previousState, updateTaskTitle(newTaskTitle));

        expect(newState.taskTitle).toBe(previousState.taskTitle);
      });
    });
  });
});
