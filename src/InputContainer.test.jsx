import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';
import { addTask, updateTaskTitle } from './actions';

jest.mock('react-redux');

test('InputContainer', () => {
  const taskTitle = '';
  const newTaskTitle = 'New Title';

  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    taskTitle,
  }));

  useDispatch.mockImplementation(() => dispatch);

  const { getByText, getByDisplayValue } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(taskTitle)).not.toBeNull();

  fireEvent.click(getByText(/추가/));

  expect(dispatch).toBeCalledWith(addTask());

  fireEvent.change(getByDisplayValue(taskTitle), { target: { value: newTaskTitle } });

  expect(dispatch).toBeCalledWith(updateTaskTitle(newTaskTitle));
});
