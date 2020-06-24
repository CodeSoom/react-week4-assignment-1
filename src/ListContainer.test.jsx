import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

function renderListContainer() {
  render(<ListContainer />);
  return {
    nothingTaskMessageElement: screen.queryByText(/할 일이 없어요!/i),
    taskListItems: screen.queryAllByRole('listitem', { name: '' }),
    doneButtons: screen.queryAllByRole('button', { name: /완료/i }),
  };
}

test('아무런 To-do가 등록되어 있지 않으면 "할 일이 없어요!"라는 메시지가 보인다', () => {
  // given
  useSelector.mockImplementation((selector) => selector({
    tasks: [],
  }));

  // when
  const { nothingTaskMessageElement } = renderListContainer();

  // then
  expect(nothingTaskMessageElement).toBeInTheDocument();
});

test('To-do가 등록되어 있으면 할 일 목록이 보인다', () => {
  // given
  useSelector.mockImplementation((selector) => selector({
    tasks: [{ id: 1, title: '코드숨 과제하기' }, { id: 2, title: '아무것도 하지 않기' }],
  }));

  // when
  const { taskListItems } = renderListContainer();

  // then
  expect(taskListItems).toHaveLength(2);
});

test('할 일을 완료한다', () => {
  // given
  useSelector.mockImplementation((selector) => selector({
    tasks: [{ id: 1, title: '코드숨 과제하기' }, { id: 2, title: '아무것도 하지 않기' }],
  }));
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  // when
  const { taskDoneButtons } = renderListContainer();
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
