import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '코드숨 공부하기 #1' },
      { id: 2, title: '리팩터링 공부하기 #2' },
    ],
  }));

  const { getByText, getAllByText } = render((
    <ListContainer />
  ));

  expect(getByText(/코드숨 공부하기 #1/)).not.toBeNull();
  expect(getByText(/리팩터링 공부하기 #2/)).not.toBeNull();

  fireEvent.click(getAllByText(/완료/)[0]);
  expect(dispatch).toBeCalledWith(deleteTask(1));
});
