import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask, updateTaskTitle } from '../redux/actions';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const tasks = [
    // { id: 1, title: '안녕하세요 반가워요' },
  ];

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    taskTitle: '',
    tasks,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('1. App 초기 빈배열 텍스트 출력', () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent('할 일이 없어요!');
  });

  it('2. task 추가 테스트', () => {
    const { getByPlaceholderText } = render(<App />);

    const input = getByPlaceholderText('할 일을 입력해 주세요');
    fireEvent.change(
      input,
      { target: { value: '피카츄 라이츄' } },
    );

    expect(dispatch).toBeCalledWith(updateTaskTitle('피카츄 라이츄'));
  });

  it('3. task 추가 후 완료 처리 테스트', () => {
    const { getByText } = render(<App />);

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalledWith(addTask());
  });
});
