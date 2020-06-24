import reducer from './reducer';
import {
  addTaskAction,
  changeTaskTitleAction,
  deleteTaskAction,
} from './actions';

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

  describe('CHANGE_TITLE', () => {
    it('should create an action to change title', () => {
      const taskTitle = 'New TItle';
      const expectedAction = {
        type: 'CHANGE_TITLE',
        payload: {
          title: taskTitle,
        },
      };
      expect(changeTaskTitleAction(taskTitle)).toEqual(expectedAction);
    });
  });

  describe('DELETE_TASK', () => {
    it('should create an action to delete a task', () => {
      const id = 1;
      const expectedAction = {
        type: 'DELETE_TASK',
        payload: {
          id,
        },
      };
      expect(deleteTaskAction(id)).toEqual(expectedAction);
    });
  });
});
