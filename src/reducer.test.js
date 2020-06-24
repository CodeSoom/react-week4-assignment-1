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
      it('return new state with new task', () => {
        const state = reducer(
          { taskTitle: 'new Title', tasks: [] },
          addTaskAction(),
        );
        expect(state.tasks).toHaveLength(1);
      });
      it('added task has a id', () => {
        const state = reducer(
          { newId: 0, taskTitle: 'new Title', tasks: [] },
          addTaskAction(),
        );
        expect(state.tasks[0].id).toEqual(0);
      });
      it('return new state with new task and old task', () => {
        const state = reducer(
          {
            newId: 1,
            taskTitle: 'new Title',
            tasks: [
              {
                id: 0,
                title: 'old Task',
              },
            ],
          },
          addTaskAction(),
        );
        expect(state.tasks).toHaveLength(2);
        expect(state.tasks[0].title).toEqual('old Task');
        expect(state.tasks[1].title).toEqual('new Title');
      });
    });
    context('without taskTitle', () => {
      it("dosn't work", () => {
        const state = reducer(
          { newId: 0, taskTitle: '', tasks: [] },
          addTaskAction(),
        );
        expect(state.tasks).toHaveLength(0);
      });
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

    context('with exact id', () => {
      it('return new state without removed task', () => {
        const state = reducer(
          { taskTitle: '', tasks: [{ id: 0, title: 'remove task' }] },
          deleteTaskAction(0),
        );
        expect(state.tasks).toHaveLength(0);
      });
    });
    context('with incorrect id', () => {
      it("dosn't work", () => {
        const state = reducer(
          { taskTitle: '', tasks: [{ id: 0, title: 'remove task' }] },
          deleteTaskAction('uid4'),
        );
        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
