import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { addTask, updateTaskTitle } from './actions';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const taskTitle = '새로운 할 일';

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((state) => state({
    taskTitle,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the task title', () => {
    const { getByRole } = render(<InputContainer />);

    expect(getByRole('textbox')).toHaveDisplayValue(taskTitle);
  });

  it('dispatches a updateTaskTitle action with input value when the input is changed', () => {
    const { getByRole } = render(<InputContainer />);

    fireEvent.change(getByRole('textbox'), { target: { value: '그냥 놀기' } });

    expect(dispatch).toBeCalledWith(updateTaskTitle('그냥 놀기'));
  });

  it('dispatches a addTask action when the button is clicked', () => {
    const { getByRole } = render(<InputContainer />);

    fireEvent.click(getByRole('button'));

    expect(dispatch).toBeCalledWith(addTask(taskTitle));
  });
});
