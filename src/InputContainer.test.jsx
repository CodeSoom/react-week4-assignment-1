import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

test('InputContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
  }));

  useDispatch.mockImplementation(() => dispatch);

  const { getByText, getByLabelText } = render((
    <InputContainer />
  ));

  expect(dispatch).not.toBeCalled();

  fireEvent.click(getByText(/추가/));

  expect(dispatch).toBeCalledWith({ type: 'addTask' });

  fireEvent.change(getByLabelText('할 일'), ({
    target: {
      value: '아무것도 안하기',
    },
  }));

  expect(dispatch).toBeCalledWith({
    type: 'updateTaskTitle',
    payload: {
      taskTitle: '아무것도 안하기',
    },
  });
});
