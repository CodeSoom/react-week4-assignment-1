import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';

import {
  deleteTask,
} from './redux/actions';

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

  it('deletes task from tasks with 완료 button', () => {
    const { getByText } = render(<App />);

    userEvent.click(
      within(getByText('codesoom'))
        .getByRole('button', { name: '완료' }),
    );

    expect(dispatch).toBeCalledWith(deleteTask(1));
  });
});
