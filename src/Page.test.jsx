import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';

jest.mock('react-redux');

test('Page', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'task-1' },
      { id: 2, title: 'task-2' },
    ],
  }));

  const { getByText } = render((
    <Page />
  ));

  expect(getByText(/task-1/)).not.toBeNull();
  expect(getByText(/task-2/)).not.toBeNull();
});
