import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('handleClick works when clicked', () => {
    useSelector.mockImplementation((selector) => selector({ taskTitle: 'New Title' }));
    const { queryByText, getByDisplayValue } = render((<InputContainer />));

    expect(queryByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/New Title/)).not.toBeNull();

    fireEvent.click(queryByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });

  it('handleChangeTitle works when input filled', () => {
    useSelector.mockImplementation((selector) => selector({ taskTitle: '' }));
    const { queryByLabelText } = render((<InputContainer />));

    expect(queryByLabelText(/할 일/).value).toEqual('');

    fireEvent.change(queryByLabelText(/할 일/), {
      target: { value: '변했어요' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: { taskTitle: '변했어요' },
    });
  });
});
