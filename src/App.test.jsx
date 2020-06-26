import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const tasks = [
    { id: 0, title: 'test1' },
    { id: 1, title: 'test2' },
  ];
  context('when nothing happend', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));

    const { getByText } = render((
      <App />
    ));

    expect(getByText(/추가/)).not.toBeNull();
  });
  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
