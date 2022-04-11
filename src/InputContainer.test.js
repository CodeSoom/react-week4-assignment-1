import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('shows task title ', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));

    const { getByText, getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/New Title/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });

  it('changes task title ', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));

    const { getByLabelText } = render((
      <InputContainer />
    ));

    fireEvent.change(getByLabelText(/할 일/), { target: { value: '새로운 할 일' } });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: '새로운 할 일',
      },
    });
  });
});
