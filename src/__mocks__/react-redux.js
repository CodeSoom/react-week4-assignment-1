export const useDispatch = jest.fn();
export const useSelector = jest.fn((selector) => selector(
  {
    tasks: [
      { id: 1, title: '' },
      { id: 2, title: '' },
    ],
  },
));
