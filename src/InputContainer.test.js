import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('InputContainer', () => {
  function renderInputContainer() {
    return render((
      <InputContainer />
    ));
  }

  it('shows task title ', () => {
    const { getByText, getByDisplayValue } = renderInputContainer();

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/New Title/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });

  it('changes task title ', () => {
    const { getByLabelText } = renderInputContainer();

    fireEvent.change(getByLabelText(/할 일/), { target: { value: '새로운 할 일' } });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: '새로운 할 일',
      },
    });
  });
});
