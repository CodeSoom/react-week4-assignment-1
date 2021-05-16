import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import InputContainer from './InputContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    taskTitle: 'New Title',
  }));
});

describe('InputContainer', () => {
  it('adds task', () => {
    const { getByText } = render((
      <InputContainer />
    ));
    expect(getByText(/추가/)).not.toBeNull();
    fireEvent.click(getByText(/추가/));
    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });

  it('changes task title', () => {
    const { getByLabelText } = render((
      <InputContainer />
    ));

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'Changing Title' },
    });

    expect(dispatch).toBeCalledWith(
      {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'Changing Title',
        },
      },
    );
  });
});
