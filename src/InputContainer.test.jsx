import { fireEvent, render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Task',
  }));
  useDispatch.mockImplementation(() => dispatch);

  render(<InputContainer />);

  it('taskTitle이 화면에 노출된다.', () => {
    const addNewTaskButton = screen.getByRole('button', { name: '추가' });

    expect(addNewTaskButton).toBeInTheDocument();
    expect(screen.getByDisplayValue('New Task')).toBeInTheDocument();

    fireEvent.click(addNewTaskButton);

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
