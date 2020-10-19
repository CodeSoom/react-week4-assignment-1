export const useDispatch = jest.fn();

export const useSelector = jest.fn((selector) => selector({
  tasks: [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ],
}));
