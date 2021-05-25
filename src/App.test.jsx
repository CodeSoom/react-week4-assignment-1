import { fireEvent, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders tasks', () => {
    useSelector.mockImplementation((selector) => selector(
      { tasks: [{ id: 1, title: 'codesoom' }] },
    ));

    const { getByText } = render(<App />);
    expect(getByText('codesoom')).toBeInTheDocument();
  });

  it('adds task to tasks with 추가 button', () => {
    useSelector.mockImplementation((selector) => selector(
      { tasks: [{ id: 1, title: 'codesoom' }] },
    ));

    const { getByRole } = render(<App />);
    userEvent.click(getByRole('button', { name: '추가' }));

    expect(dispatch).toBeCalledWith({ type: 'AddTask' });
  });

  it('deletes task from tasks with 완료 button', () => {
    useSelector.mockImplementation((selector) => selector(
      { tasks: [{ id: 1, title: 'codesoom' }] },
    ));

    const { getByRole, getByText } = render(<App />);
    userEvent.click(getByRole('button', { name: '완료' }));

    userEvent.click(
      within(getByText('codesoom'))
        .getByRole('button', { name: '완료' }),
    );

    expect(dispatch).toBeCalledWith({
      type: 'DeleteTask',
      payload: {
        id: 1,
      },
    });
  });

  it('updates taskTitle wiht input control', () => {
    useSelector.mockImplementation((selector) => selector(
      { taskTitle: '', tasks: [] },
    ));

    const { getByRole } = render(<App />);

    fireEvent.change(
      getByRole('textbox', { name: '할 일' }),
      { target: { value: 'codesoom' } },
    );

    expect(dispatch).toBeCalledWith({
      type: 'UpdateTaskTitle',
      payload: {
        taskTitle: 'codesoom',
      },
    });
  });
});
