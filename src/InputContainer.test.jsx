import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  const { getByText, getByDisplayValue } = render(<InputContainer />);

  expect(getByText(/추가/)).not.toBeNull();

  fireEvent.click(getByText(/추가/));
  expect(getByDisplayValue(/New Title/)).not.toBeNull();

  expect(dispatch).toBeCalledWith({ type: 'addTask' });
});
