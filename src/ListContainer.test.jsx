describe('<ListContainer />', () => {
  describe('Initial rendering', () => {
    context('When tasks are empty', () => {
      it('shows "할 일이 없어요!"', () => {
        useSelector.mockImplementation((selector) => selector({
          tasks: [],
        }));
        
        const { container } = render(<ListContainer />);

        expect(container).toHaveTextContent('할 일이 없어요!');
      });
    });

    context('When tasks are not empty', () => {
      it('shows tasks', () => {});
    });
  });

  describe('User interaction', () => {
    context(
      'when a user click the "완료" button for a task called "할 일2"',
      () => {
        it('occurs a deleteTask action', () => {});
      },
    );
  });
});
