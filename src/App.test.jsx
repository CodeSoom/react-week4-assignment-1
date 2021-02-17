import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    taskTitle: '',
    tasks: [],
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
    const { getByLabelText, getByDisplayValue } = render((
      <App />
    ));

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'task-1' },
    });

    expect(getByDisplayValue('task-1')).not.toBeNull();
  });
});
