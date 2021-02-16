import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

/*
TODO
- App shows "추가"
- App updates task title
- App adds task
*/

describe('App', () => {
  it('shows "추가" text', () => {
    const { getByText } = render((
      <App />
    ));

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

  it('adds task', () => {
    const { getByLabelText, getByText } = render((
      <App />
    ));

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: 'task-1' },
    });

    fireEvent.click(getByText(/추가/));

    expect(getByText('task-1')).not.toBeNull();
  });
});
