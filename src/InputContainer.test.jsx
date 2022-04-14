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

  afterEach(() => {
    jest.clearAllMocks();
  });
});

const renderInputContainer = () => render((
  <InputContainer />
));

describe('InputContainer', () => {
  it('add task title', () => {
    const { getByText, getByDisplayValue } = renderInputContainer();

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/New Title/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });

  it('updates task title', () => {
    const { getByRole } = renderInputContainer();

    fireEvent.change(getByRole('textbox'), { target: { value: '밥 먹기' } });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: '밥 먹기',
      },
    });
  });
});
