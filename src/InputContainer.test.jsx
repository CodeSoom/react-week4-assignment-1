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

  const { getByText, getByDisplayValue, getByPlaceholderText } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(/New Title/)).not.toBeNull();

  const inputBox = getByPlaceholderText('할 일을 입력해 주세요');

  fireEvent.change(inputBox, { target: { value: '뭐라도 하기' } });

  expect(dispatch).toBeCalledWith({
    type: 'updateTaskTitle',
    payload: {
      taskTitle: '뭐라도 하기',
    },
  });

  fireEvent.click(getByText(/추가/));

  expect(dispatch).toBeCalledWith({ type: 'addTask' });
});
