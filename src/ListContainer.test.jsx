import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const tasks = [
    { id: 1, title: '고양이 밥주기' },
  ];
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/완료/)).not.toBeNull();
  expect(getByText(/고양이 밥주기/)).not.toBeNull();
});
