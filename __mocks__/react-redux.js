export const useDispatch = jest.fn();
export const useSelector = jest.fn((selector) => selector({
  tasks: [
    { id: 1, title: '아무 것도 하지 않기' },
    { id: 2, title: '아무 것도 하지 않기' },
  ],
}));
// useSelector 는 function을 받는다
