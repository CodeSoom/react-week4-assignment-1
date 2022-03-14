import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import App from '../src/App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  const renderApp = () => render((<App />));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      newId: 1,
      taskTitle: '',
      tasks: [],
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  it('App 이 렌더딩 된다', () => {
    const { container } = renderApp();

    expect(container).not.toBeNull();
  });

  it('할 일 목록이 없는 경우, "할 일이 없어요!" 가 표시된다.', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent(/할 일이 없어요!/);
  });

  it('할 일 작성시, input 에 입력한 내용이 표시된다.', () => {
    const { getByRole } = renderApp();
    const input = getByRole('textbox', { name: /할 일/ });

    expect(input).toHaveValue('');
    fireEvent.change(input, { target: { value: 'new task' } });
    // expect(input).toHaveValue('new task'); // 테스트 실패
  });

  it('할 일 추가시, 입력 내용이 할 일 목록 에 추가된다.', () => {

  });

  it('할 일 삭제시, 삭제한 할 일이 목록에서 삭제된다.', () => {
  });

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
