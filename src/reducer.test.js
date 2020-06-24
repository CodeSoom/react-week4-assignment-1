import reducer from './reducer';
import {} from './actions';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      newId: 0,
      taskTitle: '',
      tasks: [],
    });
  });

  describe('ADD_TASK', () => {
    it('should create an action to add a todo', () => {
      const taskTitle = 'New TItle';
      const expectedAction = {
        type: 'ADD_TASK',
        payload: {
          title: taskTitle,
        },
      };
      expect(addTaskAction(taskTitle)).toEqual(expectedAction);
    });
  });
});
