import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    taskTitle: '',
    tasks: [
      { id: 1, title: 'task-1' },
    ],
  }));

  function renderApp() {
    return render((
      <App />
    ));
  }

  it('shows "추가" text', () => {
    const { getByText } = renderApp();

    expect(getByText(/추가/)).not.toBeNull();
  });

  it('updates task title', () => {
    const { getByLabelText } = render((
      <App />
    ));

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'task-1' },
    });

    expect(dispatch).toBeCalledWith(
      {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'task-1',
        },
      },
    );
  });

  it('adds task', () => {
    const { getByLabelText, getByText } = render((
      <App />
    ));

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'task-1' },
    });

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });

  it('deletes task', () => {
    const { getByLabelText, getByText } = render((
      <App />
    ));

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'task-1' },
    });

    fireEvent.click(getByText(/추가/));

    fireEvent.click(getByText(/완료/));

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: { id: 1 },
    });
  });
});
