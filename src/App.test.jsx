import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const tasks = [
    { id: 1, title: '쉬기' },
    { id: 2, title: '놀기' },
  ];

  const mockDispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
  useDispatch.mockReturnValue(mockDispatch);

  it('renders', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent(/To-do/);
  });
});
