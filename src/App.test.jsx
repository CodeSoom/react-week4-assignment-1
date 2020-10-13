import React from 'react';
import { Provider } from 'react-redux';

import { render, screen, fireEvent } from '@testing-library/react';

import store from './store';

import App from './App';

describe('App', () => {
  const { getByText } = render((
    <Provider store={store}>
      <App />
    </Provider>
  ));

  expect(getByText(/추가/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.

  it('Task 타이핑시 입력된 값이 출련된다.', () => {
    // When
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '청소하기' },
    });

    // Then
    expect(screen.getByRole('textbox')).toHaveValue('청소하기');
  });

  it('Task 추가시 목록에 Task가 출력된다.', () => {
    // Given
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '선물사기' },
    });

    // When
    fireEvent.click(screen.getByText('추가'));

    // Then
    expect(screen.getByRole('list')).toHaveTextContent('선물사기');
  });
});
