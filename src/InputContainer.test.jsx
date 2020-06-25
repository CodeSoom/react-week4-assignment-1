describe('<InputContainer />', () => {
  context('When the user does nothing', () => {
    it('shows "할 일을 입력해 주세요"', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
      }));

      const { getByPlaceholderText } = render(<InputContainer />);

      expect(
        getByPlaceholderText(/할 일을 입력해 주세요/i),
      ).toBeInTheDocument();
    });

    it('shows a "추가" button', () => {});
  });

  context('When a user enters a task called "바뀐다"', () => {
    it('shows "바뀐다" in the input', () => {});
  });

  context('when a user add a task called "할 일4"', () => {
    it('clear task title', () => {});

    it('occurs a addTask action', () => {});
  });
});
