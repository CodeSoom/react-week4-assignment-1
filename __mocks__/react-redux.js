export const useDispatch = jest.fn();

export const useSelector = jest.fn((selector) => selector({
  tasks: [
    { id: 1, title: '첫번째 할 일' },
    { id: 2, title: '두번째 할 일' },
  ],

}));
