import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer에서', () => {
  it('인풋을 보여준다.', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '밥 먹기',
    }));

    const { getByDisplayValue } = render(<InputContainer />);

    expect(getByDisplayValue('밥 먹기')).toBeInTheDocument();
  });

  it('추가버튼을 누르면 dispatch함수가 실행된다.', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => (dispatch));
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '밥 먹기',
    }));

    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalled();
  });

  it('입력을 하면 dispatch함수가 실행된다.', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => (dispatch));
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
    }));

    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '무언가 하기' },
    });

    expect(dispatch).toBeCalled();
  });
});
