import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const taskTitle = 'New Title';
  useSelector.mockImplementation((selector) => selector({
    taskTitle,
  }));

  const { getByText, getByDisplayValue } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(taskTitle)).not.toBeNull();
});
