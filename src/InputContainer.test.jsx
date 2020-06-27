import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  test('handleChangeTitle', () => {
    const dispatch = jest.fn();
  
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
    }));
    useDispatch.mockImplementation(() => dispatch);
  
    const { getByPlaceholderText } = render((
      <InputContainer />
    ));

    const input = getByPlaceholderText('할 일을 입력해 주세요');

    fireEvent.change(input, { target: { value: 'Handle Change Title' } });

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: 'Handle Change Title',
      },
    });
  });

  test('handleClickAddTask', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render((
      <InputContainer />
    ));

    fireEvent.click(getByText('추가'));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
