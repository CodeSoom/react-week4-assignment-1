import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  function customRender() {
    return render((
      <InputContainer />
    ));
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders to do list', () => {
    const { queryByText, getByDisplayValue } = customRender();

    expect(queryByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/New Title/)).not.toBeNull();

    fireEvent.click(queryByText(/추가/));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });

  it('listens to change event on updateTaskTitle', () => {
    const { getByRole } = customRender();

    fireEvent.change(getByRole('textbox'), { target: { value: 'a' } });

    expect(dispatch).toBeCalledWith({ type: 'updateTaskTitle', payload: { taskTitle: 'a' } });
  });
});
