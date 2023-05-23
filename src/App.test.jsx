import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks: [
      { id: 1, title: '아무것도 하지 않기#1' },
      { id: 2, title: '아무것도 하지 않기#2' },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
