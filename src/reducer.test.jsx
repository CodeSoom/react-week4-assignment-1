import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  it('state가 없으면 initialState를 리턴한다. ', () => {
    const state = reducer();

    expect(state).toEqual({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });
  });

  describe('updateTaskTitle를 실행하면 ', () => {
    it(' taskTitle을 변경한다 ', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask를 실행하면', () => {
    function reduceAddTask(taskTitle) {
      return reducer({
        newId: 100,
        taskTitle,
        tasks: [],
      }, addTask());
    }

    context('taskTitle이 있을 때', () => {
      it(' 할일을 추가하고 taskTitle을 지운다. ', () => {
        const state = reduceAddTask('New Title');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Title');
        expect(state.taskTitle).toBe('');
      });
    });

    context('taskTitle이 없을 때', () => {
      it(' 아무일도 일어나지 않는다. ', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask를 실행하면', () => {
    it(' 할일을 삭제한다. ', () => {
      const state = reducer({
        tasks: [
          { id: 1, title: '할일 #1' },
          { id: 2, title: '할일 #2' },
        ],
      }, deleteTask(1));

      expect(state.tasks).toHaveLength(1);
    });
  });
});
