import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '할 일1',
  }));

  const { getByText } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/할 일1/)).not.toBeNull();
});
