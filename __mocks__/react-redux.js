export const useDispatch = jest.fn();

export const useSelector = jest.fn((selector) => selector({
  tasks: [{ id: 1, title: '할일 1' }, { id: 1, title: '할일 2' }],
}));
