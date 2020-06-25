import reducer from './reducer';

describe('reducer', () => {
  it('기본적으로 initialState를 반환한다.', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });
  });
});
