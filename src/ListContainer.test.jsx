import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux'); // __mocks__ 에 저장된 react-redux 를 가져옴

test('ListContainer', () => {
  const tasks = [
    { id: 1, title: '밥먹기' },
    { id: 2, title: '잠자기' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/밥먹기/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
