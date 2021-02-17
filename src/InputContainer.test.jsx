import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => (dispatch));

  useSelector.mockImplementation((selector) => selector({ taskTitle: '할일 입력' }));

  const { getByText, getByDisplayValue } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(/할일 입력/)).not.toBeNull();

  fireEvent.click(getByText(/추가/));

  expect(dispatch).toBeCalledWith({ type: 'addTask' });

  expect(getByDisplayValue('할일 입력')).toBeInTheDocument();
});
