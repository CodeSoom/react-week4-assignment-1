import reducer from './reducer';

import { changeTitle, addTask } from './action';

describe('reducer', () => {
  // test('has initialState', () => {
  //   const state = reducer();
  //   expect(state).toBe({
  //     newId: 100,
  //     taskTitle: '',
  //     tasks: [],
  //   });
  // });

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
          tasks: [],
        }, addTask());

        expect(state.taskTitle).toBe('');
        expect(state.tasks.length).toEqual(3);
        expect(state.tasks[0].taskTitle).toBe(tasks[0].taskTitle);
      });
      it('clears task title', () => {
        const state = reducer({
          newId: 0,
          taskTitle: 'test',
          tasks: [],
        }, addTask());

        expect(state.taskTitle).toBe('');
        expect(state.tasks.length).toBe(1);
      });
    });
    context('without task title', () => {
      it("doesn't work", () => {

      });
    });
  });
  describe('delete task', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {

      });
    });
    context('without existed task ID', () => {
      it("doesn't worrk", () => {

      });
    });
  });
});
