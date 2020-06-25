import reducer from './reducer';

import {
  changeTitle, addTask, deleteTask,
} from './actions';

describe('reducer', () => {
  const testState = {
    newId: 100,
    taskTitle: '새로운 할 일',
    tasks: [{ id: 1, title: '기존 할 일' }],
  };

  describe('changeTitle', () => {
    it('changes task title', () => {
      const state = reducer(testState, changeTitle('새로운 할 일'));

      expect(state.taskTitle).toBe('새로운 할 일');
    });
  });

  describe('addTask', () => {
    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reducer(testState, addTask());

        expect(state.tasks[1].id).not.toBeUndefined();
        expect(state.tasks[1].title).toBe('새로운 할 일');
      });
    });
    context('without task title', () => {
      it('clears task title', () => {
        const state = reducer({
          ...testState,
          taskTitle: '',
        }, '');

        expect(state.taskTitle).toBe('');
      });
    });
  });

  describe('deleteTask', () => {
    context('with task id', () => {
      it('removes the task from tasks', () => {
        const state = reducer(testState, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });
    context('without task id', () => {
      it('does not work', () => {
        const state = reducer(testState, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  context('when action type does not exist', () => {
    it('return previous state', () => {
      const triggerMockAction = () => ({ action: 'mockAction' });
      const state = reducer(testState, triggerMockAction());

      expect(state).toBe(testState);
    });
  });
});
