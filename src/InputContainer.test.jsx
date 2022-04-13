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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  it('renders add button and taskTitle', () => {
    const { getByText, queryByDisplayValue } = renderInputContainer();

    expect(getByText(/추가/)).not.toBeNull();
    expect(queryByDisplayValue(/New Title/)).not.toBeNull();
  });

  it('renders add button and taskTitle', () => {
    const { getByText } = renderInputContainer();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });

  it('changes task title', () => {
    const { getByLabelText } = renderInputContainer();

    fireEvent.change(getByLabelText(/할 일/), {
      target: { value: '안녕하세요' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: '안녕하세요',
      },
    });
  });
});
