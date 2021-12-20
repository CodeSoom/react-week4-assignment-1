import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  // TODO: useSelector 조작
  // tasks를
  const tasks = [
    { id: 1, title: '코드숨 공부하기 #1' },
    { id: 2, title: '리팩터링 공부하기 #2' },
  ];
  // 처럼 보이게.
  // 실제로 값은 없고 테스트를 위한 예제값을 설정해줄 수 있다.

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
