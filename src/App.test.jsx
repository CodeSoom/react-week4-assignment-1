import React from 'react';

import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import App from './App';

import store from './store';

test('App', () => {
  const { getByText } = render((
    <Provider store={store}>
      <App />
    </Provider>
  ));

  expect(getByText(/추가/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
