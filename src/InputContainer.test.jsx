import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  it('adds task', () => {
    const { getByText } = render((<InputContainer />));

    expect(getByText(/추가/)).not.toBeNull();
    fireEvent.click(getByText(/추가/));
    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });

  it('changes task title', () => {
    const { getByLabelText } = render((<InputContainer />));

    fireEvent.change(getByLabelText(/할 일/), { target: { value: 'Task-1' } });

    expect(dispatch).toBeCalled();
    expect(getByLabelText(/할 일/).value).not.toBeNull();
  });
});
