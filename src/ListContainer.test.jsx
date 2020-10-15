import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const tasks = [
    { id: 1, title: '테스트로 진행할 일1' },
    { id: 2, title: '테스트로 진행할 일2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText, getAllByText } = render((
    <ListContainer />
  ));

  expect(getByText(/테스트로 진행할 일1/)).not.toBeNull();
  expect(getByText(/테스트로 진행할 일2/)).not.toBeNull();

  const buttons = getAllByText('완료');

  fireEvent.click(buttons[1]);
  expect(dispatch).toBeCalledWith({
    type: 'deleteTask',
    payload: {
      id: 2,
    },
  });
});
