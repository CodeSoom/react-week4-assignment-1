import store from './store';

describe('store', () => {
  it('returns initialState', () => {
    const { taskTitle, tasks } = store.getState();

    expect(taskTitle).toBe('');
    expect(tasks).toHaveLength(0);
  });
});
