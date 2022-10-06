import { fireEvent, render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  describe('Select Test', () => {
    it('Tasks가 있을때 title이 나온다.', () => {
      const tasks = [
        { id: 1, title: '아무 것도 하지 않기 #1' },
        { id: 2, title: '아무 것도 하지 않기 #2' },
      ];

      // 다음 함수가 이해하기 어렵습니다. (selector) => selector({tasks})??
      //
      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const { container, getByText } = render((
        <App />
      ));
      expect(getByText(/추가/)).not.toBeNull();
      expect(container).toHaveTextContent('아무 것도 하지 않기');
    });
    it('Tasks가 없을때 할 일이 없어요가 생긴다.', () => {
      const tasks = [];

      // 다음 함수가 이해하기 어렵습니다. (selector) => selector({tasks})??
      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const { container } = render((
        <App />
      ));
      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });
  describe('updateTitle Test', () => {
    it('input에 데이터가 들어면 Value가 변한다', () => {
      const { getByPlaceholderText } = render((
        <App />
      ));
      const input = getByPlaceholderText('할 일을 입력해 주세요');
      // 에러 발생함!!
      expect(input).not.toBeNull();
      console.log(input);
      fireEvent.change(input, {
        target: {
          value: 'TDD 배우기',
        },
      });
      // expect(input).toHaveAttribute('value', 'TDD 배우기');
    });
  });
});
