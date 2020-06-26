import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

import {
  addTask,
} from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('할 일을 추가한다', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Task',
    }));

    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByText, getByDisplayValue } = render(<InputContainer />);
    
    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/New Task/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));
    expect(dispatch).toBeCalledWith(addTask());
  });
});
