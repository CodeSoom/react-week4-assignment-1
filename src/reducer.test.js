import { addTask } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('addtask', () => {
    it('new task should be added to tasks ', () => {
      const changedState = reducer(
        {
          newId: 100,
          taskTitle: '첫번째 할일',
          tasks: [],
        },
        addTask(),
      );

      expect(changedState.tasks).toHaveLength(1);
      expect(changedState.tasks[0].title).toBe('첫번째 할일');
    });
  });

  describe('updateTask', () => {});

  describe('deleteTask', () => {});
});
