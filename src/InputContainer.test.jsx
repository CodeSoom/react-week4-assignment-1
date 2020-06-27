import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import InputContainer from './InputContainer';

import { addTask } from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('add input field', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '테스트',
    }));

    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByText, getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/테스트/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith(addTask());
  });
});
