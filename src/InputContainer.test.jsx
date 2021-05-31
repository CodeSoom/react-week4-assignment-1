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
    const { getByLabelText } = render((<InputContainer />));

    const taskTitle = 'Task-1';

    expect(getByLabelText('할 일')).toHaveValue('');

    fireEvent.change(getByLabelText('할 일'), { target: { value: taskTitle} });

    expect(getByLabelText('할 일')).toHaveValue('Task-1');
    expect(dispatch).toBeCalledWith({ type: 'updateTaskTitle', payload: { taskTitle } });
  });
});
