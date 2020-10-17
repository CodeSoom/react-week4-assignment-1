import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: '할일 #1' },
        { id: 2, title: '할일 #2' },
      ],
    }));

    jest.clearAllMocks();
  });

  const { getByText, getAllByText } = render((
    <ListContainer />
  ));

  expect(getByText('할일 #1')).not.toBeNull();
  expect(getByText('할일 #2')).not.toBeNull();

  expect(getAllByText(/완료/)).toHaveLength(2);

  const getButton = getAllByText(/완료/)[0];

  fireEvent.click(getButton);

  expect(dispatch).toBeCalledWith({ type: 'deleteTask', payload: { id: 1 } });

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
