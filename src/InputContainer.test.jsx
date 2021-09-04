import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('InputContainer', () => {
  const dispath = jest.fn();
  useDispatch.mockImplementation(() => dispath);

  it('reders task title', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));

    const { getByText, getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/New Title/)).not.toBeNull();
  });

  it('updates task title', () => {
    const { getByLabelText } = render((
      <InputContainer />
    ));
    fireEvent.change(getByLabelText(/할 일/), {
      target: { value: 'New Thing' },
    });
    expect(dispath).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: 'New Thing',
      },
    });
  });

  it('adds a task', () => {
    const { getByText } = render((
      <InputContainer />
    ));
    fireEvent.click(getByText(/추가/));

    expect(dispath).toBeCalledWith({
      type: 'addTask',
    });
  });
});
