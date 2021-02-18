import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const renderApp = () => (render(<App />));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'PDD',
      tasks: [
        { id: 1, title: 'TDD 졸잼...' },
        { id: 2, title: 'TDD 진짜 재밌다...' },
      ],
    }));
  });

  it('renders state', () => {
    const { getByText, getByDisplayValue } = renderApp();

    expect(getByDisplayValue(/PDD/)).not.toBeNull();
    expect(getByText(/TDD 졸잼.../)).not.toBeNull();
    expect(getByText(/TDD 진짜 재밌다.../)).not.toBeNull();
  });
});
