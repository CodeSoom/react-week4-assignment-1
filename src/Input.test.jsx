import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderInput() {
    return render((
      <Input
        value="기존 할 일"
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  it('renders inputbox', () => {
    const { getByDisplayValue, getByLabelText } = renderInput();

    expect(getByDisplayValue('기존 할 일')).not.toBeNull();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '무언가 하기' },
    });

    expect(handleChange).toBeCalled();
  });

  it('renders add task button', () => {
    const { getByText } = renderInput();

    fireEvent.click(getByText('추가'));

    expect(handleClick).toBeCalled();
  });
});
