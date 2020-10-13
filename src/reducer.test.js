import reducer from './reducer';

import { updateTaskTitle } from './actions';

describe('reducer', () => {
  it('returns initial state in case of undefined state', () => {
    const initialState = ({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });

    expect(reducer()).toEqual(initialState);
  });

  describe('updateTaskTitle', () => {
    const previousState = { taskTitle: 'prevTitle' };

    context('with valid taskTitle', () => {
      const newTaskTitle = 'New Task';

      it('returns new state with new task title', () => {
        const newState = reducer(previousState, updateTaskTitle(newTaskTitle));

        expect(newState.taskTitle).toBe(newTaskTitle);
      });
    });

    context('with invalid taskTitle', () => {
      const newTaskTitle = 0.555;

      it('returns previous state', () => {
        const newState = reducer(previousState, updateTaskTitle(newTaskTitle));

        expect(newState.taskTitle).toBe(previousState.taskTitle);
      });
    });
  });

  describe('addTask', () => {
    it('returns new state with new task added to tasks, empty taskTitle and updated id', () => {
      const previousState = {
        newId: 105,
        taskTitle: 'newTask',
        tasks: [],
      };

      const action = { type: 'addTask' };

      const newState = reducer(previousState, action);

      expect(newState.tasks).toContainEqual({
        id: previousState.newId,
        title: previousState.taskTitle,
      });
      expect(newState.taskTitle).toBe('');
      expect(newState.newId).toBe(previousState.newId + 1);
    });
  });
});
