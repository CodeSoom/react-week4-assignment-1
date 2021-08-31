import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const tasks = [
    { id: 1, title: '아무것도 하지 않기 #1' },
    { id: 2, title: '아무것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText, getAllByText } = render((
    <ListContainer />
  ));

  expect(getByText(/아무것도 하지 않기 #1/)).not.toBeNull();
  expect(getByText(/아무것도 하지 않기 #2/)).not.toBeNull();

  const buttons = getAllByText('완료');

  fireEvent.click(buttons[1]);
  expect(dispatch).toBeCalledWith({
    type: 'deleteTask',
    payload: {
      id: 2,
    },
  });
});
