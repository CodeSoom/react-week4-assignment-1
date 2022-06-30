import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import { tasksDummy } from './fixtures/task-dummy';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks: tasksDummy,
  }));

  const renderApp = () => render((
    <App />
  ));

  it('input-button을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(/추가/)).not.toBeNull();
  });

  it('list-title을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(/할일 1/)).not.toBeNull();
  });

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
