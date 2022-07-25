import reducer from './reducer';
import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('Reducer', () => {
  describe('action type is updateTaskTitle', () => {
    it('returns updated taskTitle', () => {
      const initialState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };
      expect(reducer(initialState, updateTaskTitle('할 일을 하기'))).toEqual({
        ...initialState,
        taskTitle: '할 일을 하기',
      });
    });
  });
  describe('action type is addTask', () => {
    it('returns tasks with added task', () => {
      const initialState = {
        taskTitle: 'New Task',
        newId: 100,
        tasks: [],
      };
      expect(reducer(initialState, addTask())).toEqual({
        taskTitle: '',
        newId: 101,
        tasks:
        [
          {
            id: 100,
            title: 'New Task',
          },
        ],
      });
    });
  });
  describe('action type is deleteTask', () => {
    it('returns tasks without deletedTask', () => {
      const initialState = {
        taskTitle: '',
        newId: 101,
        tasks: [
          {
            id: 100,
            title: 'New Task',
          },
        ],
      };
      expect(reducer(initialState, deleteTask(100))).toEqual({
        taskTitle: '',
        newId: 101,
        tasks: [],
      });
    });
  });
  describe('action type is not one of the defined actions', () => {
    it('returns state as is', () => {
      function someAction() {
        return {
          type: 'someAction',
        };
      }
      const initialState = {
        taskTitle: '',
        newId: 101,
        tasks: [
          {
            id: 100,
            title: 'New Task',
          },
        ],
      };
      expect(reducer(initialState, someAction())).toEqual(initialState);
    });
  });
  describe('action is not defined at all', () => {
    it('returns initial state', () => {
      const initialState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };
      expect(reducer()).toEqual(initialState);
    });
  });
});
