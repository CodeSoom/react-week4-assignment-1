import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LIstContainer from './LIstContainer';

jest.mock('react-redux');

test('LIstContainer', () => {
  const tasks = [
    { id: 1, title: '아무 것도 하지않기 #1' },
    { id: 2, title: '아무 것도 하지않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <LIstContainer />
  ));

  expect(getByText(/아무 것도 하지않기 #1/)).not.toBeNull();
});
