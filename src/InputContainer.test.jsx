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

  it('taskTitle이 업데이트 된다.', () => {
    render(<InputContainer />);

    const taskTitleInput = screen.getByRole('textbox');

    fireEvent.change(taskTitleInput, { target: { value: '할 일 #3' } });

    expect(dispatch).toBeCalledWith({ type: 'updateTaskTitle', payload: { taskTitle: '할 일 #3' } });
  });

  it('taskTitle이 화면에 노출된다.', () => {
    render(<InputContainer />);

    const addNewTaskButton = screen.getByRole('button', { name: '추가' });

    expect(addNewTaskButton).toBeInTheDocument();
    expect(screen.getByDisplayValue('New Task')).toBeInTheDocument();

    fireEvent.click(addNewTaskButton);

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
