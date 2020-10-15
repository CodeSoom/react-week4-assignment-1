import React from 'react';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('List', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '아무것도 하지 않기 3',
  }));

  const { getByText } = render((
    <InputContainer />
  ));

  expect(getByText(/아무것도 하지 않기 3/)).not.toBeNull();
  expect(getByText(/추가/)).not.toBeNull();
});
