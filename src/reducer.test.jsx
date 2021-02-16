import reducer from './reducer';

describe('reducer', () => {
  it('state가 없으면 initialState를 리턴한다. ', () => {
    const state = reducer();

    expect(state).toEqual({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });
  });
});
