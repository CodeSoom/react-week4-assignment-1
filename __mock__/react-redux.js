export const useSelector = jest.fn((selector) => selector({
  tasks: [
    { id: 1, title: '운동가기' },
    { id: 2, title: '누워있기' },
  ],
}));

export const useDispatch = jest.fn();
