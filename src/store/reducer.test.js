import { addTask, changeTitle, deleteTask } from './actions';
import reducer, { initialState } from './reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('changeTitle action', () => {
    it('should handle CHANGE_TITLE', () => {
      const newTaskTitle = 'new task title';
      expect(reducer(undefined, changeTitle(newTaskTitle)).taskTitle).toBe(
        newTaskTitle,
      );
    });
  });

  describe('addTask action', () => {
    it('should handle ADD_TASK', () => {
      const newTaskTitle = 'new task title';
      const newId = 100;

      expect(
        reducer({ taskTitle: newTaskTitle, tasks: [], newId }, addTask()).tasks,
      ).toEqual([{ id: newId, title: newTaskTitle }]);
    });
  });

  describe('deleteTask action', () => {
    it('should handle DELETE_TASK', () => {
      const taskId = 1;
      expect(
        reducer({ tasks: [{ id: taskId, title: 'task title' }] }, deleteTask(taskId)).tasks,
      ).toEqual([]);
    });
  });
});
