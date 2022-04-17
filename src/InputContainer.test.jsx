import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

function renderInputContainer() {
  return render((
    <InputContainer />
  ));
}

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders add button and the task title', () => {
    const { queryByText, queryByDisplayValue } = renderInputContainer();

    expect(queryByText(/추가/)).not.toBeNull();
    expect(queryByDisplayValue(/New Title/)).not.toBeNull();
  });

  it('changes the task title', () => {
    const { getByLabelText } = renderInputContainer();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '무언가 하기' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: '무언가 하기',
      },
    });
  });

  it('adds a new task', () => {
    const { getByText } = renderInputContainer();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
