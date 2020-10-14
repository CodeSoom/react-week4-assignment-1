import reducer from './reducer';

import { updateTaskTitle, deleteTask, addTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('할 일을 입력한다.', () => {
      const taskValue = '아무것도 하지 않기';

      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle(taskValue));

      expect(state.taskTitle).toBe(taskValue);
    });
  });

  describe('addTask', () => {
    const addReducer = (taskTitle) => reducer({
      newId: 3,
      taskTitle,
      tasks: [
        { id: 1, title: '아무 것도 하지 않기 1' },
        { id: 2, title: '아무 것도 하지 않기 2' },
      ],
    }, addTask());

    context('with taskTitle', () => {
      it('할 일을 추가한다.', () => {
        const state = addReducer('아무 것도 하지 않기');

        expect(state.tasks).toHaveLength(3);
        expect(state.tasks[0].id).not.toBeUndefined();
      });
      it('할 일을 추가 후 "taskTitle" 비워지는지 확인한다.', () => {
        const state = addReducer('아무 것도 하지 않기');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it('할 일이 추가되지 않는다.', () => {
        const state = addReducer('');

        expect(state.tasks).toHaveLength(2);
      });
    });
  });

  describe('deleteTask', () => {
    const deleteReducer = (id) => reducer({
      tasks: [
        {
          id,
          title: '아무 것도 하지 않기 1',
        },
      ],
    }, deleteTask(1));

    context('with task id', () => {
      it('할 일을 삭제한다.', () => {
        const state = deleteReducer(1);

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without task id', () => {
      it('할 일이 삭제되지 않는다.', () => {
        const state = deleteReducer(2);

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
