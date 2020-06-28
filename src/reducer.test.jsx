import reducer from './reducer';

import { changeTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  // test('has initialState', () => {
  //   const state = reducer();
  //   expect(state).toBe({
  //     newId: 100,
  //     taskTitle: '',
  //     tasks: [],
  //   });
  // });

  const tasks = [
    { id: 0, title: 'test1' },
    { id: 1, title: 'test2' },
  ];

  context('with no matched action', () => {
    it('return same state', () => {
      const state = reducer({}, { type: 'test' });

      expect(state).toEqual({});
    });
  });

  context('send no parameter of state for using initial state', () => {
    const state = reducer(undefined, {});

    expect(state).toEqual({ newId: 100, taskTitle: '', tasks: [] });
  });

  describe('update task title', () => {
    it('changes new task title', () => {
      const state = reducer({
        taskTitle: '',
      }, changeTitle('Change task title'));

      expect(state.taskTitle).toBe('Change task title');
    });
  });

  describe('add task', () => {
    context('with task title', () => {
      it('append a new task into tasks', () => {
        const state = reducer({
          newId: 2,
          taskTitle: 'test',
          tasks,
        }, addTask());

        expect(state.taskTitle).toBe('');
        expect(state.tasks.length).toEqual(3);
        expect(state.tasks[0].taskTitle).toBe(tasks[0].taskTitle);
      });
      it('clears task title', () => {
        const state = reducer({
          newId: 2,
          taskTitle: 'test',
          tasks: [],
        }, addTask());

        expect(state.taskTitle).toBe('');
        expect(state.tasks.length).toBe(1);
      });
    });
    context('without task title', () => {
      it("doesn't work", () => {
        const state = reducer({
          newId: 2,
          taskTitle: '',
          tasks: [],
        }, addTask());

        expect(state.taskTitle).toBe('');
        expect(state.tasks.length).toBe(0);
      });
    });
  });
  describe('delete task', () => {
    context('with existed task id', () => {
      it('remove task from tasks', () => {
        const state = reducer({
          tasks,
        }, deleteTask(0));

        expect(state.tasks.length).toBe(1);
      });
    });
    context('without existed task id', () => {
      it("doesn't work", () => {
        const state = reducer({
          tasks,
        }, deleteTask(200));

        expect(state.tasks.length).toBe(2);
      });
    });
  });
});
