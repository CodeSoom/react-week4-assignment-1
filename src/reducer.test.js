import {
  updateReducer,
  addReducer,
  deleteReducer,
  missingReducer,
} from './reducer';

import {
  updateTaskTitle,
  deleteTask,
} from './actions';

describe('reducer', () => {
  function initialState(taskTitle) {
    return {
      newId: 100,
      taskTitle,
      tasks: [],
    };
  }

  describe('updateTaskTitle', () => {
    it('changes state with new task title', () => {
      const state = updateReducer(initialState(''), updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });

    context('when initial state is undefined', () => {
      it('set the initial', () => {
        const state = updateReducer(undefined, updateTaskTitle('New Title'));

        expect(state.tasks).toHaveLength(0);
        expect(state.taskTitle).toBe('New Title');
      });
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      it('appends a new task into tasks', () => {
        const state = addReducer(initialState('New Task'));

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clear task title', () => {
        const state = addReducer(initialState('New Task'));

        expect(state.taskTitle).toBe('');
        expect(state.tasks[0].id).not.toBeUndefined();
      });
    });

    context('without taskTitle', () => {
      it('doesnt work', () => {
        const state = addReducer(initialState(''));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without state', () => {
      it('set the initial but dosnt work', () => {
        const state = addReducer(undefined);

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    function reduceDeleteTask(taskTitle) {
      return {
        newId: 100,
        taskTitle,
        tasks: [
          { id: 1, title: '코드숨 공부하기 #1' },
          { id: 2, title: '리팩터링 공부하기 #2' },
        ],
      };
    }

    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        // 결과 자체만을 테스트하기 보다 해당 변화에 집중
        // 이 코드를 실행하면 어떤 일이 벌어질까?
        const originState = reduceDeleteTask('New Title');

        const oldLength = originState.tasks.length;

        const state = deleteReducer(originState, deleteTask(1));

        const newLength = state.tasks.length;

        // 초기 상태에서 deleteTask가 실행되면 길이가 감소
        expect(oldLength - newLength).toBe(1);
      });
    });

    context('without existed task ID', () => {
      it('dont remove the task', () => {
        const state = deleteReducer(reduceDeleteTask('New Title'), deleteTask(111));

        expect(state.tasks).toHaveLength(2);
      });
    });

    context('without state', () => {
      it('set the initial but dosnt work', () => {
        const state = deleteReducer(undefined, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('missingTask', () => {
    it('nothing happen', () => {
      const state = missingReducer(initialState('Missing Title'));

      expect(state.taskTitle).toBe('Missing Title');
    });

    context('without state', () => {
      it('set the initial but nothing happen', () => {
        const state = missingReducer(undefined);

        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
