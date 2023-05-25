import reducer, { updateTaskTitle, addTask, deleteTask } from './reducers';

// 테스트하고자 하는 것의 input과 output을 명확하게 해야하지
// input? 변경 전 state,action
// output? 변경 후 state

describe('reducer', () => {
  describe('taskTitle을 변경한다', () => {
    it('taskTitle이 변경된 상태를 반환한다.', () => {
      const prevState = { newId: 100, taskTitle: '', tasks: [] };
      const state = reducer(prevState, updateTaskTitle('change'));
      expect(state.taskTitle).toBe('change');
    });
  });
  describe('taskTitle을 추가한다', () => {
    context('taskTitle이 없는 경우', () => {
      const prevState = {
        newId: 100, taskTitle: '', tasks: [],
      };
      const state = reducer(prevState, addTask());
      expect(state.tasks).toHaveLength(0);
    });
    context('taskTitle이 있는 경우', () => {
      const prevState = {
        newId: 100, taskTitle: 'something', tasks: [],
      };
      const state = reducer(prevState, addTask());
      expect(state.tasks[0].title).toBe('something');
      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].id).toBe(100);
    });
  });
  describe('task를 삭제한다', () => {
    it('tasks에서 해당 값을 제외한 상태를 반환한다.', () => {
      const prevState = {
        newId: 101,
        taskTitle: '',
        tasks: [{ id: 100, taskTitle: 'something' }],
      };
      const state = reducer(prevState, deleteTask(100));
      expect(state.tasks).toHaveLength(0);
    });
  });
});
