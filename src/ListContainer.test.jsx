import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks: [
        { id: 1, title: 'Task-1' },
        { id: 2, title: 'Task-2' },
      ],
    }),
  );

  it('기존에 등록되어있는 task가 있다.', () => {
    const { getByText } = render(<ListContainer />);

    expect(getByText('Task-1')).not.toBeNull();
    expect(getByText('Task-2')).not.toBeNull();
  });

  // TODO: 통합 테스트 코드 작성

  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
