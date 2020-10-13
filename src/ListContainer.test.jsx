import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const tasks = [
    {
      id: 1,
      title: '아무것도 하지않기1',
    },
    {
      id: 2,
      title: '아무것도 하지않기2',
    },
  ];

  useSelector.mockImplementation((selector) => selector({ tasks }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/아무것도 하지않기1/)).not.toBeNull();
});
