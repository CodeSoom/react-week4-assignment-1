import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

import { updateTaskTitle, addTaskTitle } from '../actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  const renderInputContainer = () => render(<InputContainer />);

  it('render textbox and button', () => {
    const { getByRole } = renderInputContainer();

    expect(getByRole('textbox')).not.toBeNull();
    expect(getByRole('button')).not.toBeNull();
  });

  it("clicks '완료' button, dispatch addTaskTitle", () => {
    const { getByText } = renderInputContainer();

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalledWith(addTaskTitle());
  });

  it('input taskTitle, dispatch changeTaskTitle', () => {
    const { getByLabelText } = renderInputContainer();

    fireEvent.change(getByLabelText('할 일'), { target: { value: '테스트' } });

    expect(dispatch).toBeCalledWith(updateTaskTitle('테스트'));
  });
});
