import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
  }));
  useDispatch.mockImplementation(() => () => { });

  const { getByText } = render((
    <App />
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
});
