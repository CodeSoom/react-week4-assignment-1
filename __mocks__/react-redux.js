export const useDispatch = jest.fn();

export const useSelector = jest.fn((selector) => selector({
  tasks: [
    { id: 1, title: '아무 것도 안함 #1' },
    { id: 2, title: '아무 것도 안함 #2' },
  ],
}));
