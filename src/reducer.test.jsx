import reducer from './reducer';

describe('reducer', () => {
  test('has initialState', () => {
    const state = reducer();
    expect(state).toEqual({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });
  });
  describe('update task title', () => {
    it('changes new task title', () => {

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
