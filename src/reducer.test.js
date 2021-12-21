import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  function reduceAddTask(taskTitle) {
    return {
      newId: 100,
      taskTitle,
      tasks: [],
    };
  }

  describe('updateTaskTitle', () => {
    it('changes state with new task title', () => {
      const state = reducer(reduceAddTask(''), updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });

    context('without state', () => {
      it('set the initial', () => {
        const state = reducer(undefined, updateTaskTitle('New Title'));

        expect(state.tasks).toHaveLength(0);
        expect(state.taskTitle).toBe('New Title');
      });
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      it('appends a new task into tasks', () => {
        const state = reducer(reduceAddTask('New Task'), addTask());

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clear task title', () => {
        const state = reducer(reduceAddTask('New Task'), addTask());

        expect(state.taskTitle).toBe('');
        expect(state.tasks[0].id).not.toBeUndefined();
      });
    });

    context('without taskTitle', () => {
      it('doesnt work', () => {
        const state = reducer(reduceAddTask(''), addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without state', () => {
      it('set the initial but dosnt work', () => {
        const state = reducer(undefined, addTask());

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
        const state = reducer(reduceDeleteTask('New Title'), deleteTask(1));

        expect(state.tasks).toHaveLength(1);
      });
    });

    context('without existed task ID', () => {
      it('dont remove the task', () => {
        const state = reducer(reduceDeleteTask('New Title'), deleteTask(111));

        expect(state.tasks).toHaveLength(2);
      });
    });

    context('without state', () => {
      it('set the initial but dosnt work', () => {
        const state = reducer(undefined, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('missingTask', () => {
    it('nothing happen', () => {
      const state = reducer(reduceAddTask('Missing Title'), { type: 'missingTask' });

      expect(state.taskTitle).toBe('Missing Title');
    });

    context('without state', () => {
      it('set the initial but nothing happen', () => {
        const state = reducer(undefined, { type: 'missingTask' });

        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
