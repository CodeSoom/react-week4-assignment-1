import App from './App';
import renderWithProviders from './utils/utils-for-tests';

test('App', () => {
  const { getByText } = renderWithProviders(<App />);

  expect(getByText(/추가/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
