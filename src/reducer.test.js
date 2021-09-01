import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('taskTitle이 New Title로 업데이트 된다.', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    context('taskTitle이 비어있있지 않으면', () => {
      it('task가 추가된다.', () => {
        const state = reducer({
          nextId: 100,
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());

        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('taskTitle이 비워진다.', () => {
        const state = reducer({
          nextId: 100,
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());

        expect(state.taskTitle).toBe('');
      });
    });

    context('taskTitle가 비어있다면', () => {
      it('task가 추가되지 않는다.', () => {
        const state = reducer({
          nextId: 100,
          taskTitle: '',
          tasks: [],
        }, addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('ID가 존재하는 task가 있다면', () => {
      it('해당 ID task가 제거된다.', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('ID가 존재하는 task가 없다면', () => {
      it('task가 제거되지 않는다.', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
