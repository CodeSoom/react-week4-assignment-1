import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';
import { useDispatch } from '../__mocks__/react-redux';

jest.mock('react-redux');

function renderApp() {
  render(<App />);
  return {
    taskInput: screen.getByLabelText(/할 일/i, { selector: 'input' }),
    taskAddButton: screen.getByRole('button', { name: /추가/i }),
    taskDoneButtons: screen.queryAllByRole('button', { name: /완료/i }),
  };
}

const dispatch = jest.fn();

beforeEach(() => {
  dispatch.mockClear();
  useDispatch.mockImplementation(() => dispatch);
});

test('아무런 To-do가 등록되어 있지 않으면 "할 일이 없어요!"라는 메시지가 보인다', () => {
  // given
  useSelector.mockImplementation((selector) => selector({
    tasks: [],
  }));
  // when
  renderApp();
  // then
  expect(screen.getByText(/할 일이 없어요!/i)).toBeInTheDocument();
});

test('할 일을 입력한다', () => {
  // when
  const { taskInput } = renderApp();
  fireEvent.change(taskInput, { target: { value: '아무것도 하지 않기' } });
  // then
  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch).toBeCalledWith({
    type: 'updateTaskTitle',
    payload: { taskTitle: '아무것도 하지 않기' },
  });
});

test('할 일을 추가한다', () => {
  // when
  const { taskAddButton } = renderApp();
  fireEvent.click(taskAddButton);
  // then
  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch).toBeCalledWith({
    type: 'addTask',
    payload: {},
  });
});

test('할 일을 완료한다', () => {
  // given
  useSelector.mockImplementation((selector) => selector({
    tasks: [{ id: 1, title: '코드숨 과제하기' }, { id: 2, title: '아무것도 하지 않기' }],
  }));
  // when
  const { taskDoneButtons } = renderApp();
  taskDoneButtons.forEach((button) => fireEvent.click(button));
  // then
  expect(dispatch).toBeCalledTimes(2);
  expect(dispatch).toBeCalledWith({
    type: 'deleteTask',
    payload: { id: 1 },
  });
  expect(dispatch).toBeCalledWith({
    type: 'deleteTask',
    payload: { id: 2 },
  });
});
