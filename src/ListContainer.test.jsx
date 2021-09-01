import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispath = jest.fn();

  useDispatch.mockImplementation(() => dispath);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'Do Nothing' },
    ],
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/Do Nothing/)).not.toBeNull();

  fireEvent.click(getByText(/완료/));

  expect(dispath).toBeCalledWith({
    type: 'deleteTask',
    payload: {
      id: 1,
    },
  });
});
