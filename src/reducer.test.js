import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  context('존재하지 않는 action을 dispatch한 경우', () => {
    it('state에는 아무 변화도 일어나지 않는다.', () => {
      const state = reducer({}, { type: 'thisIsNotAction' });

      expect(state).toEqual({});
    });
  });

  context('state 값을 undefined로 전달하고, action을 dispatch한 경우', () => {
    it('state에는 initialState가 반환된다.', () => {
      const state = reducer(undefined, { type: 'addTask' });

      expect(state).toEqual({
        newId: 100,
        taskTitle: '',
        tasks: [],
      });
    });
  });

  describe('updateTaskTitle', () => {
    it('taskTitle 값이 변화한다.', () => {
      const previousState = { taskTitle: '' };

      const state = reducer(previousState, updateTaskTitle('new title'));

      expect(state.taskTitle).toBe('new title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      const previousState = {
        newId: 100,
        taskTitle,
        tasks: [],
      };

      return reducer(previousState, addTask());
    }

    context('taskTitle이 있는 경우', () => {
      it('task가 추가된다.', () => {
        const state = reduceAddTask('do something');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('do something');
      });

      it('taskTitle이 초기화된다.', () => {
        const state = reduceAddTask('do something');

        expect(state.taskTitle).toBe('');
      });
    });

    context('taskTitle이 없는 경우', () => {
      it('task가 추가되지 않는다.', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('task에 해당하는 id가 있다면', () => {
      it('tasks가 삭제된다.', () => {
        const previousState = {
          tasks: [{
            id: 1,
            title: 'do something',
          }],
        };

        const state = reducer(previousState, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('task에 해당하는 id가 있다면', () => {
      it('task가 삭제되지 않는다.', () => {
        const previousState = {
          tasks: [{
            id: 1,
            title: 'do something',
          }],
        };

        const state = reducer(previousState, deleteTask(2));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
