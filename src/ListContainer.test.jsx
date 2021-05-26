import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ],
  }));

  const { getAllByText, getAllByRole, getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
  expect(getAllByRole('button')).toHaveLength(2);

  const buttons = getAllByText(/완료/);

  fireEvent.click(buttons[0]);

  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
