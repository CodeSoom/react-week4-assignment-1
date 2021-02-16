import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import ListContainer from './App';

jest.mock('react-redux');

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [{ id: 1, title: '할일1' }],
  }));

  const { queryByText } = render((
    <ListContainer />
  ));

  expect(queryByText('할일1')).toBeInTheDocument();
});
