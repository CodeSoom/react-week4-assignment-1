import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
} from './action';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('텍스트 입력', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('고양이 밥주기'));

      expect(state.taskTitle).toBe('고양이 밥주기');
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

    context('입력값 있을 때', () => {
      it('할 일 추가', () => {
        const state = reduceAddTask('고양이 밥주기');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('고양이 밥주기');
      });

      it('할 일 추가 후 인풋 초기화', () => {
        const state = reduceAddTask('고양이 밥주기');

        expect(state.taskTitle).toBe('');
      });
    });

    context('입력값 없을 때', () => {
      it('작동안함', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
