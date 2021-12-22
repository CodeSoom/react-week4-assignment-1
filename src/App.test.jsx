import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('할 일이 없는 상태로 초기 랜더링을 하면 비어있는 메세지를 보여줍니다.', () => {
    const sut = render(<App />);

    expect(sut.queryByText('할 일이 없어요!')).not.toBeNull();
  });

  it('할 일을 입력한 후 "추가" 버튼을 클릭하면 할 일이 추가됩니다.', () => {
    const taskTitle = 'foo';
    const sut = render(<App />);

    fireEvent.change(sut.getByLabelText('할 일'), { target: { value: taskTitle } });
    fireEvent.click(sut.getByRole('button', { name: '추가' }));

    expect(sut.queryByRole('list')).not.toBeNull();
    expect(sut.queryByText(taskTitle)).not.toBeNull();
  });

  it('할 일이 있는 상태에서 "완료" 버튼을 클릭하면 할 일이 제거됩니다.', () => {
    const taskTitle = 'foo';
    const sut = render(<App />);
    fireEvent.change(sut.getByLabelText('할 일'), { target: { value: taskTitle } });
    fireEvent.click(sut.getByRole('button', { name: '추가' }));

    fireEvent.click(sut.getByRole('button', { name: '완료' }));

    expect(sut.queryByRole('list')).toBeNull();
    expect(sut.queryByText('할 일이 없어요!')).not.toBeNull();
  });
});

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
