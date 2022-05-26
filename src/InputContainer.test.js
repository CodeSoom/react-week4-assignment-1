import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTaskTitle } from './actions';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  const { getByText, getByDisplayValue, getByLabelText } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).toBeInTheDocument();
  expect(getByDisplayValue(/New Title/)).toBeInTheDocument();

  const changedTaskTitle = '산책';

  fireEvent.change(getByLabelText('할 일'), {
    target: { value: changedTaskTitle },
  });

  expect(dispatch).toBeCalledWith(updateTaskTitle(changedTaskTitle));

  fireEvent.click(getByText(/추가/));

  expect(dispatch).toBeCalledWith(addTask());
});
