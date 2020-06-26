import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('task를 추가할 수 있는 버튼이 있다.', () => {
    const { getByText } = render(<InputContainer />);

    expect(getByText(/추가/)).not.toBeNull();
  });

  it('taskTitle 입력창이 있다.', () => {
    const { getByPlaceholderText } = render(<InputContainer />);

    expect(getByPlaceholderText('할 일을 입력해 주세요')).not.toBeNull();
  });

  it('taskTitle을 변경한다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
    }));

    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(getByPlaceholderText('할 일을 입력해 주세요'), {
      target: { value: 'new Task' },
    });

    expect(dispatch).toBeCalled();
  });

  it('task를 추가한다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'new Task',
      tasks: [],
    }));

    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalled();
  });
});
