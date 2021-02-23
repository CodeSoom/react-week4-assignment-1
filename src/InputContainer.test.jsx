import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';
import { ADD_TASK, UPDATE_TASK } from './actions';

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

  it('should dispatch ADD_TASK when click button', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementationOnce(() => dispatch);

    const { getByText } = render((
      <InputContainer />
    ));

    fireEvent.click(getByText('추가'));

    expect(dispatch).toHaveBeenCalledWith({ type: ADD_TASK });
  });

  it('should dispatch UPDATE_TASK when input text', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementationOnce(() => dispatch);

    const { getByPlaceholderText } = render((
      <InputContainer />
    ));

    fireEvent.change(getByPlaceholderText('할 일을 입력해 주세요'), {
      target: { value: '손씻기' },
    });

    expect(dispatch).toHaveBeenCalledWith({ type: UPDATE_TASK, payload: '손씻기' });
  });
});
