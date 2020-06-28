import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

// react-redux 이름을 가진 파일을 찾아서
// 찾은 그 파일을 이용하여 테스트를 작동한다.
jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  // TODO: useSelector 조작
  // store에 저장된 초기 상태 tasks와 독립적으로
  // test에서 가짜 상태를 가정하여 확인할 수 있다.
  const tasks = [{ id: 1, title: '아무것도 하지 않기 #1' }];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/아무것도 하지 않기 #1/)).not.toBeNull();

  fireEvent.click(getByText(/완료/));

  expect(dispatch).toBeCalledWith({
    type: 'deleteTask',
    payload: {
      id: 1,
    },
  });

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
