import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const tasks = [
    { id: 1, title: '할일 1' }, { id: 2, title: '할일 2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/할일 1/)).not.toBeNull();
});
