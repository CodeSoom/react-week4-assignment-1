import { addTask, deleteTask, updateTaskTitle } from './actions';

import reducer from './reducer';

describe('reducer', () => {
  describe('taskTitle 변경을 시도한다', () => {
    it('taskTitle이 변경이된다', () => {
      const state = reducer({ taskTitle: '' }, updateTaskTitle('새로운 할일이다!'));

      expect(state.taskTitle).toBe('새로운 할일이다!');
    });
  });

  describe('addTask ', () => {
    const reduceAddTask = (taskTitle) => reducer(
      { taskTitle, tasks: [], newId: 1 }, addTask(),
    );

    context('taskTitle이 있는경우', () => {
      it('tasks에 할일이 추가되었다', () => {
        const state = reduceAddTask('할일을 추가해봅시다!');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('할일을 추가해봅시다!');
      });

      it('tasks에 추가후 taskTitle이 초기화되었다', () => {
        const state = reduceAddTask('할일이 곧 사라지겠군요!');

        expect(state.taskTitle).toBe('');
      });
    });

    context('taskTitle이 없는경우', () => {
      it('tasks에 할일이 추가되지않는다', () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('tasks-title 지우기를 시도한다', () => {
    it('할일이 삭제되었다', () => {
      const state = reducer({
        taskTitle: '',
        tasks: [{
          id: 100, title: '할일을 지워보자',
        }],
      }, deleteTask(100));

      expect(state.tasks).toHaveLength(0);
    });
  });
});
