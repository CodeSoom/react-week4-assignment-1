import reducer from './reducer';
import { addTask, deleteTask, updateTaskTitle } from './action/actions';

describe('reducer', () => {
  it('기본값이 반환된다', () => {
    const state = reducer(undefined, {});

    expect(state.newId).toBe(100);
  });

  context('지정되지 않은 type이 넘어가면', () => {
    it('state 그대로 반환된다', () => {
      const expectState = { taskTitle: 'empty' };

      const state = reducer(expectState, {});

      expect(state.taskTitle).toBe(expectState.taskTitle);
    });
  });

  describe('updateTaskTitle', () => {
    it('새로운 이름으로 변경된다 ', () => {
      const expectTitle = 'New Task';

      const state = reducer({}, updateTaskTitle(expectTitle));

      expect(state.taskTitle).toBe(expectTitle);
    });
  });

  describe('addTask', () => {
    context('새로운 Task가 등록되면', () => {
      it('기존의 Title은 초기화된다', () => {
        const expectTitle = '';

        const { taskTitle } = reducer({
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());

        expect(taskTitle).toBe(expectTitle);
      });

      it('새 Task가 tasks에 등록된다', () => {
        const expectId = 1;
        const expectTitle = 'New Task';

        const { tasks } = reducer({
          taskTitle: expectTitle,
          newId: expectId,
          tasks: [],
        }, addTask());

        expect(tasks).toHaveLength(1);
        expect(tasks[0].id).toBe(expectId);
        expect(tasks[0].title).toBe(expectTitle);
      });
    });
  });

  describe('deleteTask', () => {
    it('deleteTask로 기존 task를 삭제할 수 있다', () => {
      const targetId = 1;
      const { tasks } = reducer({ tasks: [{ id: targetId, title: 'task title' }] },
        deleteTask(targetId));

      expect(tasks).toEqual([]);
    });
  });
});
