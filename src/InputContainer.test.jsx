import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('show tasks', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '아무것도 안 하기',
    }));

    const { getByText } = render((
      <InputContainer />
    ));

    expect(getByText(/아무것도 안 하기/)).not.toBeNull();
  });
});
