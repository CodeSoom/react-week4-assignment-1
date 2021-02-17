import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    taskTitle: '',
  }));

  function renderInputContainer() {
    return render((
      <InputContainer />
    ));
  }

  it('shows "추가" text', () => {
    const { getByText } = renderInputContainer();

    expect(getByText(/추가/)).not.toBeNull();
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
    const { getByLabelText, getByText } = render((
      <InputContainer />
    ));

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'task-1' },
    });

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
