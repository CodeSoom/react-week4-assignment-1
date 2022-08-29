import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  let dispatch;

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));

    dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders Input', () => {
    const { getByText, getByDisplayValue } = render(
      <InputContainer />,
    );

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/New Title/)).toHaveAttribute('type', 'text');
  });

  it('renders input to listen to change event', () => {
    const { getByLabelText } = render(
      <InputContainer />,
    );

    fireEvent.change(getByLabelText(/할 일/), { target: { value: 'Task title' } });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: 'Task title',
      },
    });
  });

  it('renders add button to listen to click event', () => {
    const { getByText } = render(
      <InputContainer />,
    );

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
