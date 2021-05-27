import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({ tasks }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
});
