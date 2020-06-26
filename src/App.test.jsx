import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks: [
        { id: 1, title: 'Task-1' },
        { id: 2, title: 'Task-2' },
      ],
    }),
  );
  it('task를 추가할 수 있는 버튼이 있다.', () => {
    const { getByText } = render(<App />);

    expect(getByText(/추가/)).not.toBeNull();
  });

  it('기존에 등록되어있는 task가 있다.', () => {
    const { getByText } = render(<App />);

    expect(getByText('Task-1')).not.toBeNull();
    expect(getByText('Task-2')).not.toBeNull();
  });
  // TODO: 통합 테스트 코드 작성

  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
