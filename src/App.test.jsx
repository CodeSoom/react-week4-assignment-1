import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';
import { useDispatch } from '../__mocks__/react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '코드숨 과제하기1' },
      { id: 2, title: '코드숨 과제하기2' },
    ],
  }));

  test('앱이 실행되면  화면에 추가 버튼과 코드숨 과제하기1 task가 있다', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/추가/)).not.toBeNull();

    expect(getByText(/코드숨 과제하기1/)).not.toBeNull();
  });

  test('input에 값을 입력하면 updateTaskTitle action이 호출된다', () => {
    const { getByPlaceholderText } = render((
      <App />
    ));
    const input = getByPlaceholderText(/할 일을 입력해 주세요/);

    fireEvent.change(input, { target: { value: '잠자기' } });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: '잠자기',
      },
    });
  });

  test('추가 버튼을 누르면 addTask action이 호출된다', () => {
    const { getByText } = render((
      <App />
    ));

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });

  test('완료 버튼을 누르면 deleteTask action이 호출된다', () => {
    const { getAllByText } = render((
      <App />
    ));

    fireEvent.click(getAllByText('완료')[0]);

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: {
        id: 1,
      },
    });
  });
});
