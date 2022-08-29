import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const tasks = [
    { id: '1', title: '아무것도 하지 않기 #1' },
    { id: '2', title: '아무것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  it('renders Page', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/추가/)).not.toBeNull();
  });
});
