import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('요소들을 보여준다.', () => {
    const tasks = [
      { id: 1, title: '뭐라도 하기 #1' },
      { id: 2, title: '뭐라도 하기 #2' },
    ];

    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
      tasks,
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(queryByText(/추가/)).not.toBeNull();
    expect(queryByText(/뭐라도 하기 #1/)).not.toBeNull();
  });
});
