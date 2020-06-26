import reducer from './reducer';

import Tasks from './__fixtures__/tasks.json';

describe('reducer', () => {
  describe('no state', () => {
    it('set initial-state ', () => {
      const previousState = undefined;
      const nextState = reducer(previousState, { type: 'invalid-action-type' });
      expect(nextState).not.toBeUndefined();
    });
  });

  describe('invalid action', () => {
    it('do nothing', () => {
      const previousState = {
        someStatePropperty: Math.random() * 10,
      };
      const nextState = reducer(previousState, { type: 'invalid-action-type' });
      expect(previousState).toEqual(nextState);
    });
  });

  describe('updateTaskTitle', () => {
    it('changes task-title', () => {
      const previousState = {
        taskTitle: '',
      };
      const newTaskTitle = '아무것도 하지 않기';
      const nextState = reducer(previousState, {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: newTaskTitle,
        },
      });
      expect(nextState.taskTitle).toBe(newTaskTitle);
    });
  });

  describe('addTask', () => {
    context('with task-title', () => {
      it('appends a new-task into tasks', () => {
        const previousState = {
          taskId: 100,
          taskTitle: '아무것도 하지 않기',
          tasks: [],
        };
        const nextState = reducer(previousState, { type: 'addTask' });
        expect(nextState.tasks).toHaveLength(1);
        expect(nextState.tasks[0].id).toBe(previousState.taskId);
        expect(nextState.tasks[0].title).toBe(previousState.taskTitle);
      });

      it('clears task-title', () => {
        const previousState = {
          taskTitle: '아무것도 하지 않기',
          tasks: [],
        };
        const nextState = reducer(previousState, { type: 'addTask' });
        expect(nextState.taskTitle).toBe('');
      });
    });

    context('without task-title', () => {
      it('does not work', () => {
        const previousState = {
          taskTitle: '',
          tasks: [],
        };
        const nextState = reducer(previousState, { type: 'addTask' });
        expect(nextState.tasks.length).toBe(previousState.tasks.length);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed-task-id', () => {
      it('delete a task from tasks', () => {
        const previousState = {
          tasks: Tasks,
        };
        const nextState = reducer(previousState, {
          type: 'deleteTask',
          payload: {
            id: previousState.tasks[0].id,
          },
        });
        expect(nextState.tasks.length).toBe(previousState.tasks.length - 1);
        expect(nextState.tasks[0].id).toBe(previousState.tasks[1].id);
        expect(nextState.tasks[0].title).toBe(previousState.tasks[1].title);
      });
    });

    context('without task-title', () => {
      it('does not work', () => {
        const previousState = {
          tasks: Tasks,
        };
        const nextState = reducer(previousState, {
          type: 'deleteTask',
          payload: {
            id: Math.random() * 10,
          },
        });
        expect(nextState.tasks.length).toBe(previousState.tasks.length);
        for (let i = 0; i < nextState.length - 1; i += 1) {
          expect(nextState.tasks[i].id).toBe(previousState.tasks[i].id);
          expect(nextState.tasks[i].title).toBe(previousState.tasks[i].title);
        }
      });
    });
  });
});
