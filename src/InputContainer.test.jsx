import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('할 일 입력하기', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
    }));
    const { getByPlaceholderText } = render((
      <InputContainer />
    ));

    fireEvent.change(getByPlaceholderText(/할 일을 입력해 주세요/), {
      target: {
        value: '고양이 밥주기',
      },
    });
    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: '고양이 밥주기',
      },
    });
  });

  it('할 일 추가하기', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '고양이 밥주기',
    }));
    const { getByText, getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/고양이 밥주기/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));
    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
