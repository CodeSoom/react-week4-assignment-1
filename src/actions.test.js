import configureStore from 'redux-mock-store';
import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('actions', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  it('should dispatch action', () => {
    const initialState = {
      newId: 100,
      taskTitle: '',
      tasks: [],
    };
    const store = mockStore(initialState);

    store.dispatch(updateTaskTitle('New Title'));

    const actions = store.getActions();

    const expectedPayload = {
      type: 'updateTaskTitle',
      payload: {
        taskTitle: 'New Title',
      },
    };

    expect(actions).toEqual([expectedPayload]);
    expect(addTask().type).toEqual('addTask');
    expect(deleteTask(1).type).toEqual('deleteTask');
  });
});
