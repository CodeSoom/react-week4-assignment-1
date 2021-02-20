import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const tasks = [
    { id: 1, title: '아무것도 하지 않기 1' },
    { id: 2, title: '아무것도 하지 않기 2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/아무것도 하지 않기 1/)).not.toBeNull();
});
