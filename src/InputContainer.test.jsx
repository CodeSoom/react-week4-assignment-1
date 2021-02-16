import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';
import { ADD_TASK } from './actions';

jest.mock('react-redux');

test('InputContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '손씻기',
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const { getByText, getByPlaceholderText } = render((
    <InputContainer />
  ));

  expect(getByText('추가')).toBeInTheDocument();
  expect(getByText('할 일')).toBeInTheDocument();
  expect(getByPlaceholderText('할 일을 입력해 주세요').value).toBe('손씻기');

  fireEvent.click(getByText('추가'));

  expect(dispatch).toHaveBeenCalledWith({ type: ADD_TASK });
});
