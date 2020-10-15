import React from 'react';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('List', () => {
  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 1' },
    { id: 2, title: '아무 것도 하지 않기 2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getAllByText } = render((
    <ListContainer />
  ));

  getAllByText(/아무 것도 하지 않기/).forEach((task) => {
    expect(task).not.toBeNull();
  });
});
