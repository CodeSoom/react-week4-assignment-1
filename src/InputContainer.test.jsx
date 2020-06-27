import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTittle: 'New Title',
  }));

  const { container, getByText, getByPlaceholderText } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  // expect(getByDisplayValue(/New Title/)).not.toBeNull();

  fireEvent.change(getByPlaceholderText(/할 일을 입력해 주세요/), { target: { value: 'test something' } });
  expect(container).toBeInTheDocument('test something');

  fireEvent.click(getByText(/추가/));
  expect(dispatch).toBeCalledWith({ type: 'addTask' });
});
