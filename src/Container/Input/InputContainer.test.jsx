import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('has taskTitle of redux state as a input value', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));

    const { getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByDisplayValue(/New Title/)).not.toBeNull();
  });

  it('calls updateTaskTitle action when input is changed', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
    }));

    const { getByLabelText } = render((
      <InputContainer />
    ));

    expect(getByLabelText('할 일')).toHaveValue('');

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'New Title' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: { taskTitle: 'New Title' },
    });
  });

  it('calls addTask action when add button is clicked', () => {
    const { getByText } = render((
      <InputContainer />
    ));

    expect(getByText(/추가/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
