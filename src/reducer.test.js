import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
} from './actions';

describe('reducer', () => {
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
        const state = reduceAddTask();

        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
