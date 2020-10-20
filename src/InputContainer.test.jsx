import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'task-1' },
      { id: 2, title: 'task-2' },
    ],
  }));
  const { getByText, getByLabelText } = render((
    <InputContainer />
  ));

  expect(getByLabelText(/할 일/)).not.toBeNull();

  fireEvent.change(getByLabelText(/할 일/), { target: { value: 'new task' } });

  expect(getByText(/추가/)).not.toBeNull();

  fireEvent.click(getByText(/추가/));

  expect(dispatch).toBeCalledWith({
    type: 'addTask',
  });
});
