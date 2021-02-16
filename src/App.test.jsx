import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
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
    const { getByLabelText, getByDisplayValue } = renderApp();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'task-1' },
    });

    expect(getByDisplayValue('task-1')).not.toBeNull();
  });

  it('adds task', () => {
    const { getByLabelText, getByText } = renderApp();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'task-1' },
    });

    fireEvent.click(getByText(/추가/));

    expect(getByText('task-1')).not.toBeNull();
  });

  it('deletes task', () => {
    const { container, getByLabelText, getByText } = renderApp();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'task-1' },
    });

    fireEvent.click(getByText(/추가/));

    fireEvent.click(getByText(/완료/));

    expect(container).not.toHaveTextContent('task-1');
  });
});
