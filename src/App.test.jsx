import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const renderApp = () => (render(<App />));

  const taskTitle = 'PDD';

  const tasks = [
    { id: 1, title: 'TDD 졸잼...' },
    { id: 2, title: 'TDD 진짜 재밌다...' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      taskTitle,
      tasks,
    }));
  });

  it('renders state', () => {
    const { getByText, getByDisplayValue } = renderApp();

    expect(getByDisplayValue(taskTitle)).not.toBeNull();

    tasks.forEach(({ title }) => {
      expect(getByText(title)).not.toBeNull();
    });
  });
});
