import reducer from './reducer';
import {
  changeTitle, addTask, deleteTask,
} from './actions';

describe('reducer', () => {
  describe('changeTitle', () => {
    it('changes task title', () => {
      const state = reducer({
        taskTitle: '',
      }, changeTitle('새로운 할 일'));

      expect(state.taskTitle).toBe('새로운 할 일');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer({
        newId: 100,
        taskTitle,
        tasks: [],
      }, addTask());
    }

    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask('새로운 할 일');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('새로운 할 일');
      });
    });
    context('without task title', () => {
      it('clears task title', () => {
        const state = reduceAddTask('');

        expect(state.taskTitle).toBe('');
      });
    });
  });

  describe('deleteTask', () => {
    context('with task id', () => {
      it('removes the task from tasks', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: '새로운 할 일' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });
    context('without task id', () => {
      it('does not work', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: '새로운 할 일' },
          ],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  context('when action type does not exist', () => {
    it('return previous state', () => {
      const triggerMockAction = () => ({ action: 'mockAction' });
      const previousState = {};
      const state = reducer(previousState, triggerMockAction());

      expect(state).toBe(previousState);
    });
  });
});
