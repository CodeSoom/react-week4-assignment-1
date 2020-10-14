import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';
import { addTask, updateTaskTitle } from './actions';

jest.mock('react-redux');

function renderInputContainer() {
  return render((
    <InputContainer />
  ));
}

describe('InputContainer', () => {
  const { taskTitle } = useSelector.mockImplementation((selector) => selector({
    taskTitle,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('dispatch updateTaskTitle action', () => {
    const newTaskTitle = 'next task';

    const { getByLabelText } = renderInputContainer();

    expect(getByLabelText('할 일')).not.toBeNull();

    fireEvent.change(getByLabelText('할 일'), { target: { value: newTaskTitle } });

    expect(dispatch).toBeCalledWith(updateTaskTitle(newTaskTitle));
  });

  it('dispatch addTask action', () => {
    const { getByText } = renderInputContainer();

    expect(getByText(/추가/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith(addTask());
  });
});
