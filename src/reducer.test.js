import reducer from './reducer';
import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  it('사용자 입력을 반영합니다.', () => {
    const state = reducer({ taskTitle: '' },
      updateTaskTitle('할 일'));

    expect(state.taskTitle).toBe('할 일');
  });

  context('taskTitle이 있는 경우', () => {
    it('할 일을 추가합니다.', () => {
      const state = reducer({
        newId: 0,
        taskTitle: '할 일1',
        tasks: [],
      }, addTask());

      expect(state.newId).toBe(1);
      expect(state.taskTitle).toBe('');
      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].id).not.toBeUndefined();
      expect(state.tasks[0].title).toBe('할 일1');
    });
  });

  context('taskTitle이 없는 경우', () => {
    it('아무 변화가 없습니다.', () => {
      const state = reducer({
        newId: 0,
        taskTitle: '',
        tasks: [],
      }, addTask());

      expect(state.tasks).toHaveLength(0);
    });
  });

  it('완료한 일을 삭제합니다.', () => {
    const state = reducer({
      newId: 1,
      taskTitle: '할 일1',
      tasks: [{
        id: 1,
        title: '할 일1',
      }],
    }, deleteTask(1));

    expect(state.tasks).toHaveLength(0);
  });
});
