import reducer from './reducer';

describe('reducer', () => {
  it('빈 객체를 넘겼을 때 initialState를 리턴한다. ', () => {
    const state = reducer({});
    const initialState = {};
    expect(state).toEqual(initialState);
  });
});
