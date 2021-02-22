import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

import { updateTaskTitle, addTask } from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  beforeEach(() => useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  })));

  it('title render test', () => {
    const { getByText, getByDisplayValue } = render((<InputContainer />));

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/New Title/)).not.toBeNull();
  });

  it('addTask test', () => {
    useDispatch.mockImplementation(() => dispatch);
    const { getByText } = render((<InputContainer />));

    fireEvent.click(getByText(/추가/));
    expect(dispatch).toBeCalledWith(addTask());
  });

  it('updateTaskTitle test', () => {
    useDispatch.mockImplementation(() => dispatch);
    const { getByDisplayValue } = render((<InputContainer />));

    fireEvent.change(getByDisplayValue(/New Title/), { target: { value: 'update test' } });
    expect(dispatch).toBeCalledWith(updateTaskTitle('update test'));
  });
});
