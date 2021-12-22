import reducer from '../../src/store/reducer';
import { addTask, deleteTask, updateTaskTitle } from '../../src/store/actions';

describe('reducer', () => {
  it('초기에는 초기상태를 반환한다. ', () => {
    const state = reducer();

    expect(state).toEqual({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });
  });

  describe('addTask', () => {
    describe('taskTitle 이 있다면', () => {
      it('새로운 task 가 추가된 state 를 반환한다.', () => {
        const prevState = {
          newId: 1,
          taskTitle: 'New task',
          tasks: [],
        };

        const action = addTask();

        const state = reducer(prevState, action);

        expect(state.tasks).toHaveLength(1);
        expect(state.taskTitle).toBe('');
      });
    });

    describe('taskTitle 이 없다면', () => {
      it('기존 state 를 반환한다.', () => {
        const prevState = {
          newId: 1,
          taskTitle: '',
          tasks: [],
        };

        const action = addTask();

        const state = reducer(prevState, action);

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    it('해당 id를 가진 tasks 가 제거된 새로운 state 를 반환한다.', () => {
      const prevState = {
        tasks: [{ id: 1, title: 'task1' }],
      };

      const action = deleteTask(1);

      const state = reducer(prevState, action);

      expect(state.tasks).toHaveLength(0);
    });
  });

  describe('updateTaskTitle', () => {
    it('새로운 taskTitle 가진 state 를 반환한다.', () => {
      const prevState = {
        taskTitle: '',
      };

      const action = updateTaskTitle('New task');

      const state = reducer(prevState, action);

      expect(state.taskTitle).toBe('New task');
    });
  });
});
