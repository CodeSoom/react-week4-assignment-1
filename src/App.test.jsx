import { fireEvent, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector(
      {
        taskTitle: '',
        tasks: [{ id: 1, title: 'codesoom' }],
      },
    ));
  });

  it('renders tasks', () => {
    const { getByText } = render(<App />);
    expect(getByText('codesoom')).toBeInTheDocument();
  });

  it('adds task to tasks with 추가 button', () => {
    const { getByRole } = render(<App />);
    userEvent.click(getByRole('button', { name: '추가' }));

    expect(dispatch).toBeCalledWith(addTask());
  });

  it('deletes task from tasks with 완료 button', () => {
    const { getByText } = render(<App />);

    userEvent.click(
      within(getByText('codesoom'))
        .getByRole('button', { name: '완료' }),
    );

    expect(dispatch).toBeCalledWith(deleteTask(1));
  });

  it('updates taskTitle with input control', () => {
    const { getByRole } = render(<App />);

    fireEvent.change(
      getByRole('textbox', { name: '할 일' }),
      { target: { value: 'codesoom' } },
    );

    expect(dispatch).toBeCalledWith(updateTaskTitle('codesoom'));
  });
});
