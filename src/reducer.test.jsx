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

  describe('updateTaskTitle', () => {
    it(' taskTitle을 변경한다 ', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    it(' 할일을 추가한다. ', () => {
      const state = reducer({
        newId: 100,
        taskTitle: 'New Title',
        tasks: [],
      }, addTask());

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('New Title');
      expect(state.taskTitle).toBe('');
    });
  });

  describe('deleteTask', () => {
    it(' 할일을 삭제한다. ', () => {
      const state = reducer({
        taskTitle: '',
        tasks: [
          { id: 1, title: '할일 #1' },
          { id: 2, title: '할일 #2' },
        ],
      }, deleteTask(1));

      expect(state.tasks).toHaveLength(1);
    });
  });
});
