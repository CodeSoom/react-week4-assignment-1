import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

jest.mock('react-redux');

function mockSelector({ taskTitle = '', tasks = [] } = {}) {
  const state = {
    taskTitle,
    tasks,
  };

  useSelector.mockImplementation((selector) => selector(state));
}

describe('App', () => {
  context('로딩 후 아무 작업을 하지 않을 경우', () => {
    it('초기화면이 표시된다.', () => {
      mockSelector();

      const { container, getByLabelText } = render((
        <App />
      ));

      expect(container).toHaveTextContent('To-do');
      expect(container).toHaveTextContent('할 일');
      expect(container).toHaveTextContent('추가');
      expect(container).toHaveTextContent('할 일이 없어요!');

      const input = getByLabelText('할 일');

      expect(input).toHaveAttribute('value', '');
      expect(input).toHaveAttribute('placeholder', '할 일을 입력해 주세요');
    });
  });

  context('input에 할 일을 적고 추가 버튼을 누르면', () => {
    it('할 일이 추가된다.', () => {
      mockSelector();

      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { getByText, getByLabelText } = render((
        <App />
      ));

      const input = getByLabelText('할 일');

      fireEvent.change(input, { target: { value: 'do something' } });

      expect(dispatch).toBeCalledWith(updateTaskTitle('do something'));

      fireEvent.click(getByText('추가'));

      expect(dispatch).toBeCalledWith(addTask());
    });
  });

  context('할 일이 추가된 상태에서 완료 버튼을 누르면', () => {
    it('할 일이 제거되고 할 일이 없어요! 문구가 뜨게 된다.', () => {
      mockSelector({
        tasks: [
          { id: 1, title: 'do something' },
        ],
      });

      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { getByText } = render((
        <App />
      ));

      fireEvent.click(getByText('완료'));

      expect(dispatch).toBeCalledWith(deleteTask(1));
    });
  });
});
