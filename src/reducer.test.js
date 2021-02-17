describe('reducer', () => {
  it('사용자 입력을 반영합니다.', () => {
    const state = reducer({ taskTitle: '' }, { taskTitle: '할 일2' });
  });
});
