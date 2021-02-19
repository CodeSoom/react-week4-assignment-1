import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('reat-redux');

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: '1', title: 'TDD연습하기' },
      { id: '2', title: 'TDD연습 두번하기' },
    ],
  }));
  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/TDD연습하기/)).not.toBeNull();
});
