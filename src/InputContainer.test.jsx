import React from 'react';

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

  const { getByText, getByDisplayValue, getByLabelText } = render((
    <InputContainer />
  ));

  const addButton = getByText(/추가/);

  expect(addButton).not.toBeNull();
  expect(getByDisplayValue(/New Title/)).not.toBeNull();

  fireEvent.click(addButton);
  expect(dispatch).toBeCalledWith({ type: 'addTask' });

  fireEvent.change(getByLabelText(/할 일/), { target: { value: '변경된 할 일' } });
  expect(dispatch).toBeCalledWith({
    type: 'updateTaskTitle',
    payload: {
      taskTitle: '변경된 할 일',
    },
  });
});
