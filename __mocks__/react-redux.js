export const useDispatch = jest.fn();

export const useSelector = jest.fn((selector) => selector({
    tasks: [
      { id: 1, title: '리덕스 공부하기' },
      { id: 2, title: 'TDD 공부하기' },
    ],
  }),
);
