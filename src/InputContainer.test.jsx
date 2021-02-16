import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('should render label, input, button', () => {
    useSelector.mockImplementationOnce((selector) => selector({
      taskTitle: '손씻기',
    }));

    const { getByText, getByPlaceholderText } = render((
      <InputContainer />
    ));

    expect(getByText('추가')).toBeInTheDocument();
    expect(getByText('할 일')).toBeInTheDocument();
    expect(getByPlaceholderText('할 일을 입력해 주세요').value).toBe('손씻기');
  });
});
