import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer Test', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const state = {
    taskTitle: 'New Title',
  };
  useSelector.mockImplementation((selector) => selector(state));

  const { getByText, getByDisplayValue } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(/New Title/)).not.toBeNull();
  fireEvent.click(getByText(/추가/));
  expect(dispatch).toBeCalledWith({ type: 'addTask' });
});
