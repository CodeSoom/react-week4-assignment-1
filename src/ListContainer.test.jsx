import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { queryByText, getAllByText } = render((
    <ListContainer />
  ));

  expect(queryByText(/아무 것도 하지 않기 #1/)).not.toBeNull();

  fireEvent.click(getAllByText(/완료/)[0]);

  expect(dispatch).toBeCalledWith({
    type: 'deleteTask',
    payload: {
      id: 1,
    },
  });
});
