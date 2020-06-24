import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

function renderInputContainer() {
  render(<InputContainer />);
  return {
    taskInput: screen.getByLabelText(/할 일/i, { selector: 'input' }),
    taskAddButton: screen.getByRole('button', { name: /추가/i }),
  };
}

const dispatch = jest.fn();

beforeEach(() => {
  dispatch.mockClear();
  useDispatch.mockImplementation(() => dispatch);
});

test('할 일을 입력한다', () => {
  // when
  const { taskInput } = renderInputContainer();
  fireEvent.change(taskInput, { target: { value: '아무것도 하지 않기' } });
  // then
  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch).toBeCalledWith({
    type: 'updateTaskTitle',
    payload: { taskTitle: '아무것도 하지 않기' },
  });
});

test('할 일을 추가한다', () => {
  // when
  const { taskAddButton } = renderInputContainer();
  fireEvent.click(taskAddButton);
  // then
  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch).toBeCalledWith({
    type: 'addTask',
    payload: {},
  });
});
