import { addTask, updateTask, deleteTask } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('addtask', () => {
    context('with taskTitle', () => {
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
        expect(changedState.tasks[0].id).not.toBeUndefined();
        expect(changedState.tasks[0].title).toBe('첫번째 할일');
      });

      it('taskTitle should be removed when added new tasks ', () => {
        const changedState = reducer(
          {
            newId: 100,
            taskTitle: '첫번째 할일',
            tasks: [],
          },
          addTask(),
        );

        expect(changedState.taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it('should not change nothing', () => {
        const changedState = reducer(
          {
            newId: 100,
            taskTitle: '',
            tasks: [],
          },
          addTask(),
        );

        expect(changedState.tasks).toHaveLength(0);
      });
    });
  });

  describe('updateTask', () => {
    it('taskTitle should be changed', () => {
      const previousState = {
        taskTitle: '',
      };
      const changedState = reducer(
        previousState,
        updateTask('두번째 할일'),
      );

      expect(changedState.taskTitle).toBe('두번째 할일');
    });
  });

  describe('deleteTask', () => {
    it('should be deleted seleted task', () => {
      const previousState = {
        newId: 100,
        taskTitle: '',
        tasks: [{ id: 1, title: '첫번째 할일' }, { id: 2, title: '두번째 할일' }],
      };

      const changedState = reducer(
        previousState,
        deleteTask(2),
      );

      expect(changedState.tasks).toHaveLength(1);
    });
  });
});
