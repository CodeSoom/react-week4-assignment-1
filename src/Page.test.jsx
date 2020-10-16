import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Page from './Page';

jest.mock('react-redux');

test('Page', () => {
  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    taskTitle: '',
    tasks: [
      { id: 1, title: '아무것도 하지않기 #1' },
      { id: 2, title: '아무것도 하지않기 #2' },
    ],
  }));

  const { getByText } = render((
    <Page />
  ));

  expect(getByText(/아무것도 하지않기 #1/)).not.toBeNull();
  expect(getByText(/아무것도 하지않기 #2/)).not.toBeNull();
});
