import reducer from './reducer';

import { updateTaskTitle, deleteTask, addTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('할 일을 입력한다.', () => {
      const taskValue = '아무것도 하지 않기';

      const { taskTitle } = reducer({
        taskTitle: '',
      }, updateTaskTitle(taskValue));

      expect(taskTitle).toBe(taskValue);
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
    const taskValue = '아무것도 하지 않기';

    context('with taskTitle', () => {
      it('할 일을 추가한다.', () => {
        const { tasks, taskTitle } = addReducer(taskValue);

        expect(tasks).toHaveLength(3);
        expect(tasks[tasks.length - 1].title).toBe(taskValue);
        expect(tasks[0].id).not.toBeUndefined();
        expect(taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it('할 일이 추가되지 않는다.', () => {
        const { tasks } = addReducer('');

        expect(tasks).toHaveLength(2);
      });
    });
  });

  describe('deleteTask', () => {
    const deleteReducer = (id) => reducer({
      tasks: [
        { id, title: '아무 것도 하지 않기 1' },
      ],
    }, deleteTask(1));

    context('with task id', () => {
      it('할 일을 삭제한다.', () => {
        const { tasks } = deleteReducer(1);

        expect(tasks).toHaveLength(0);
      });
    });

    context('without task id', () => {
      it('할 일이 삭제되지 않는다.', () => {
        const { tasks } = deleteReducer(2);

        expect(tasks).toHaveLength(1);
      });
    });
  });

  describe('undefined action', () => {
    context('with state', () => {
      it('tasks가 존재할 때', () => {
        const { tasks } = reducer(
          {
            tasks: [
              { id: 1, title: 'Task' },
            ],
          },
          { type: 'undefined', payload: {} },
        );

        expect(tasks).toHaveLength(1);
      });
    });

    context('without state', () => {
      it('tasks가 없을 때', () => {
        const { tasks } = reducer(
          undefined,
          { type: 'undefined', payload: {} },
        );

        expect(tasks).toHaveLength(0);
      });
    });
  });
});
