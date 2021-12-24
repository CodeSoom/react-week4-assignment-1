import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  const { getByText, getByDisplayValue, getByRole } = render(<InputContainer />);

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(/New Title/)).not.toBeNull();
  fireEvent.click(getByText(/추가/));

  expect(dispatch).toBeCalledWith({
    type: 'addTask',
  });

  const input = getByRole('textbox', { name: /할 일/ });
  fireEvent.change(input, { target: { value: 'Change Title' } });
  expect(dispatch).toBeCalledWith({
    type: 'updateTaskTitle',
    payload: { taskTitle: 'Change Title' },
  });
});
