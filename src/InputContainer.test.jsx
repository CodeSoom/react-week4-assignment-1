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

  const renderInputContainer = () => render(<InputContainer />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the task title', () => {
    const { getByLabelText } = renderInputContainer();

    expect(getByLabelText('할 일')).toHaveDisplayValue(taskTitle);
  });

  it('dispatches a updateTaskTitle action with input value when the input is changed', () => {
    const { getByLabelText } = renderInputContainer();

    fireEvent.change(getByLabelText('할 일'), { target: { value: '그냥 놀기' } });

    expect(dispatch).toBeCalledWith(updateTaskTitle('그냥 놀기'));
  });

  it('dispatches a addTask action when the button is clicked', () => {
    const { getByRole } = renderInputContainer();

    fireEvent.click(getByRole('button', { name: '추가' }));

    expect(dispatch).toBeCalledWith(addTask(taskTitle));
  });
});
