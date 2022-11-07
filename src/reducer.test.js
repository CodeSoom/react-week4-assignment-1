import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('입력한 할일을 업데이트 해준다', () => {
      const state = reducer(
        {
          taskTitle: '',
        },
        updateTaskTitle('누워있기'),
      );

      expect(state.taskTitle).toBe('누워있기');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer(
        {
          taskTitle,
          tasks: [],
        },
        addTask(taskTitle),
      );
    }

    context('할일이 있을 경우', () => {
      it('입력한 할일을 랜더링한다', () => {
        const state = reduceAddTask('누워있기');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('누워있기');
      });

      it('입력창을 초기화시켜준다', () => {
        const state = reduceAddTask();

        expect(state.taskTitle).toBe();
      });
    });

    context('할일이 없을 경우', () => {
      it('아무런 작동을 하지 않는다', () => {
        const state = reduceAddTask();

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    function reduceDeleteTask(id) {
      return reducer(
        {
          tasks: [{ id: 1, title: 'Task' }],
        },
        deleteTask(id),
      );
    }

    context('id가 있을 경우', () => {
      it('해당 할일을 삭제한다', () => {
        const state = reduceDeleteTask(1);

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('id가 없을 경우', () => {
      it('아무런 작동을 하지 않는다', () => {
        const state = reduceDeleteTask(-1);

        expect(state.tasks).toHaveLength(1);
      });
    });
  });

  describe('아무런 값이 없을 때', () => {
    it('아무런 일도 일어나지 않음', () => {
      const state = reducer();

      expect(state.taskTitle).toBe('');
      expect(state.tasks).toHaveLength(0);
    });
  });
});
