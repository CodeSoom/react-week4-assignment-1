import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const tasks = [
    {
      id: 1,
      taskTitle: '아무 것도 하지 않기',
    },
    {
      id: 2,
      taskTitle: '더더욱 아무 것도 하지 않기',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/아무 것도 하지 않기/)).not.toBeNull();
  expect(getByText(/더더욱 아무 것도 하지 않기/)).not.toBeNull();


  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
