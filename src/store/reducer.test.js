import { ACTION_TYPES } from './actions';
import reducer, { initialState } from './reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CHANGE_TITLE', () => {
    const newTaskTitle = 'new task title';
    expect(
      reducer(undefined, {
        type: ACTION_TYPES.CHANGE_TITLE,
        payload: { taskTitle: newTaskTitle },
      }).taskTitle,
    ).toBe(newTaskTitle);
  });

  it('should handle CHANGE_DESCRIPTION', () => {
    const newTaskTitle = 'new task title';
    const newId = 100;

    expect(
      reducer(
        { taskTitle: newTaskTitle, tasks: [], newId },
        {
          type: ACTION_TYPES.ADD_TASK,
        },
      ).tasks,
    ).toEqual([{ id: newId, title: newTaskTitle }]);
  });

  it('should handle DELETE_TASK', () => {
    const taskId = 1;
    expect(
      reducer({ tasks: [{ id: taskId, title: 'task title' }] }, {
        type: ACTION_TYPES.DELETE_TASK,
        payload: { id: taskId },
      }).tasks,
    ).toEqual([]);
  });
});
