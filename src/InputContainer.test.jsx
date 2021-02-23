import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { updateTaskTitle, addTask } from './actions';

import InputContainer from './InputContainer';

describe('InputContainer', () => {
  const renderInputContainer = () => render(<InputContainer />);

  const dispatch = jest.fn();

  const taskTitle = 'TDD는 언제나 새롭다';

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({ taskTitle }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders title', () => {
    const { getByDisplayValue } = renderInputContainer();

    expect(getByDisplayValue(/TDD는 언제나 새롭다/)).not.toBeNull();
  });

  it('updates value upon changing of input value', () => {
    const { getByDisplayValue } = renderInputContainer();

    fireEvent.change(getByDisplayValue(/TDD는 언제나 새롭다/),
      {
        target: { value: '거짓말 아님' },
      });

    expect(dispatch).toBeCalledWith(updateTaskTitle('거짓말 아님'));
  });

  it('adds a task to tasks upon Clicking 추가 button', () => {
    const { getByText } = renderInputContainer();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith(addTask());
  });
});
