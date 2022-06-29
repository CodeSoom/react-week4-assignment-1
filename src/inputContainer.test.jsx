import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispathch = jest.fn();

  useDispatch.mockImplementation(() => dispathch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '할일!',
  }));

  const { getByText, getByDisplayValue } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(/할일/)).not.toBeNull();

  fireEvent.click(getByText(/추가/));

  expect(dispathch).toBeCalledWith({
    type: 'addTask',
  });
});
