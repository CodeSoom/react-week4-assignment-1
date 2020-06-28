import RootStore from './stores';

describe('create store', () => {
  it('return store object', () => {
    expect(RootStore).not.toBeNull();
  });
});
