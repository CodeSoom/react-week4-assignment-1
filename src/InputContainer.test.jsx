import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

import { updateTaskTitle, addTask } from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('render a task title', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '아무것도 안 하기',
    }));

    const { getByDisplayValue } = render(<InputContainer />);

    expect(getByDisplayValue(/아무것도 안 하기/)).not.toBeNull();
  });

  it('changes a task title', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
    }));

    const { getByLabelText } = render(<InputContainer />);

    expect(getByLabelText('할 일')).not.toBeNull();

    fireEvent.change(getByLabelText('할 일'), { target: { value: '무언가 하기' } });

    expect(dispatch).toBeCalledWith(updateTaskTitle('무언가 하기'));
  });

  it('click add button', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '무언가 하기',
    }));

    const { getByText } = render(<InputContainer />);

    expect(getByText(/추가/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith(addTask());
  });
});
