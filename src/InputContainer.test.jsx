import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({}));

  it('adds task', () => {
    const { getByText } = render((<InputContainer />));

    expect(getByText('추가')).not.toBeNull();
    fireEvent.click(getByText('추가'));
    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });

  it('changes task title', () => {
    const { getByPlaceholderText } = render((<InputContainer />));

    fireEvent.change(getByPlaceholderText('할 일을 입력해 주세요'), { target: { value: 'Task-1' } });

    expect(dispatch).toBeCalled();
    expect(getByPlaceholderText('할 일을 입력해 주세요')).toHaveValue('Task-1');
  });
});
