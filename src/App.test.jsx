import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks,
  }));

  const { queryByText } = render((
    <App />
  ));

  expect(queryByText(/추가/)).not.toBeNull();
  expect(queryByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
});
