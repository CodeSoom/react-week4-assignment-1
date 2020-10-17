import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '할일1' },
      { id: 2, title: '할일2' },
    ],
  }));

  const { getByText, getAllByText } = render((
    <ListContainer />
  ));

  expect(getByText(/할일1/)).not.toBeNull();

  const buttons = getAllByText('완료');

  fireEvent.click(buttons[0]);

  expect(dispatch).toBeCalledWith({ type: 'deleteTask', payload: { id: 1 } });
});
