describe('<App />', () => {
  context('When a user first launches the to-do app', () => {
    it('shows "To-do" ', () => {});

    it('shows "할 일"', () => {});

    it('shows "추가"', () => {});

    it('shows "할 일이 없어요!"', () => {});
  });

  context('When a user enters a task called "바뀐다"', () => {
    it('shows "바뀐다" in the input', () => {});
  });

  context('when a user add a task called "할 일4"', () => {
    it('appends a new task into tasks', () => {});
  });

  context(
    'when a user click the "완료" button for a task called "할 일2"',
    () => {
      it('does not show "할 일2"', () => {});
    },
  );
});
