import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('reat-redux');

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: '1', title: 'TDD연습하기' },
      { id: '2', title: 'TDD연습 두번하기' },
    ],
  }));
  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/TDD연습하기/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
