import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('adds a task', () => {
    const { getByText, getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/New Title/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });

  it('updates task title', () => {
    const { getByLabelText } = render((
      <InputContainer />
    ));

    const inputNode = getByLabelText('할 일');

    fireEvent.change(inputNode, { target: { value: '안녕' } });

    expect(dispatch).toBeCalledWith({
      payload: {
        taskTitle: '안녕',
      },
      type: 'updateTaskTitle',
    });
  });
});
