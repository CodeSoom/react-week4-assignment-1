import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

// TODO: 통합 테스트 코드 작성
describe('App', () => {
  function renderApp() {
    const { container, getByText, getByPlaceholderText } = render(<App />);
    return {
      container,
      input: getByPlaceholderText('할 일을 입력해 주세요'),
      getByText,
    };
  }

  function changeValue(input, value) {
    fireEvent.change(input, {
      target: {
        value,
      },
    });
  }

  it('title과 버튼을 화면에 보여준다.', () => {
    const { getByText } = renderApp();

    expect(getByText(/To-do/)).not.toBeNull();
    expect(getByText(/추가/)).not.toBeNull();
  });

  context('할 일을 입력하면', () => {
    it('value가 변한다.', () => {
      const { input } = renderApp();

      changeValue(input, 'New Task');

      expect(input.value).toBe('New Task');
    });
  });

  context('할 일을 추가하면', () => {
    it('목록에 추가되고 value는 비어진다.', () => {
      const { container, input, getByText } = renderApp();

      changeValue(input, 'New Task');

      fireEvent.click(getByText(/추가/));
      expect(container).toHaveTextContent(/New Task/);
      expect(input.value).toBe('');
    });
  });

  context('할 일을 삭제하면', () => {
    it('목록에서 사라진다.', () => {
      const { getByText, getByPlaceholderText } = render(<App />);
      const input = getByPlaceholderText('할 일을 입력해 주세요');

      changeValue(input, 'New Task');

      fireEvent.click(getByText(/추가/));
      const task = getByText(/New Task/);
      const removeButton = getByText(/완료/);

      fireEvent.click(removeButton);
      expect(task).not.toBeInTheDocument();
    });
  });
});
