import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '할일1' },
      { id: 2, title: '할일2' },
    ],
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/할일1/)).not.toBeNull();
});
