import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

import { tasks } from '../fixtures/tasks';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks,
  }));

  const { getByText } = render(
    <App />,
  );

  expect(getByText(/추가/)).toBeInTheDocument();
  expect(getByText(/Task-1/)).toBeInTheDocument();
  expect(getByText(/Task-2/)).toBeInTheDocument();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
