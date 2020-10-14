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

  const { getByText } = render((
    <InputContainer />
  ));

  fireEvent.click(getByText('추가'));

  expect(dispatch).toBeCalled();
});
