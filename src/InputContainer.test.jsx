import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));
  });

  it('updates task title', () => {
    const { getByLabelText } = render((
      <InputContainer />
    ));

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'task-1' },
    });

    expect(dispatch).toBeCalledWith(
      {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'task-1',
        },
      },
    );
  });

  it('adds task', () => {
    const { getByText, queryByText, queryByDisplayValue } = render((
      <InputContainer />
    ));

    expect(queryByText(/추가/)).not.toBeNull();
    expect(queryByDisplayValue(/New Title/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
