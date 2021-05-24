import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

import { useSelector } from 'react-redux';

jest.mock('react-redux');

test('ListContainer', () => {
  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
});
