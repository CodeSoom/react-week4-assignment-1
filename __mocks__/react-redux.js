export const useDispatch = jest.fn();
export const useSelector = jest.fn((selector) => selector({
  newId: 0,
  taskTitle: '',
  tasks: [],
}));
