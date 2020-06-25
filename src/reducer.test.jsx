import reducer from './reducer';

import { changeTitle } from './action';

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

      });
      it('clears task title', () => {

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
