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
      };
      expect(addTaskAction(taskTitle)).toEqual(expectedAction);
    });

    context('with taskTitle', () => {
      it('return new state with new tasks', () => {
        const state = reducer(
          { taskTitle: 'new Title', tasks: [] },
          addTaskAction(),
        );
        expect(state.tasks).toHaveLength(1);
      });
      it('added task has a id', () => {
        const state = reducer(
          { taskTitle: 'new Title', tasks: [] },
          addTaskAction(),
        );
        expect(state.tasks[0].id).toEqual(0);
      });
    });
    context('without taskTitle', () => {});
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

    it('return new state with new taskTitle', () => {
      const state = reducer(
        { taskTitle: '' },
        changeTaskTitleAction('new Title'),
      );
      expect(state.taskTitle).toEqual('new Title');
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
