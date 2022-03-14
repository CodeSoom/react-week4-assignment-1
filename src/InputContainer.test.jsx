import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  // const dispatch = jest.fn();

  // useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '운동가기',
  }));

  const { getByDisplayValue } = render(
    <InputContainer />,
  );

  expect(getByDisplayValue(/운동가기/)).toBeInTheDocument();
  // expect(dispatch).toBeCalledWith({ type: 'addTask' });
});
