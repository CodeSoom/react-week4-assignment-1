import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';
import {
  changeTitle, addTask, deleteTask,
} from './actions';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks: [{ id: 1, title: '저녁먹기' }],
  }));

  context('when value is changed', () => {
    it('occurs change title action', () => {
      const value = '새로운 할 일';
      const { getByLabelText } = render((
        <App />
      ));

      fireEvent.change(getByLabelText(/할 일/), { target: { value } });
      expect(dispatch).toBeCalledWith(changeTitle(value));
    });
  });

  context('when add button is clicked', () => {
    it('occurs add task action', () => {
      const { getByText } = render((
        <App />
      ));

      fireEvent.click(getByText(/추가/));
      expect(dispatch).toBeCalledWith(addTask());
    });
  });

  context('when delete button is clicked', () => {
    it('occurs delete task action', () => {
      const { getByText } = render((
        <App />
      ));

      fireEvent.click(getByText(/완료/));
      expect(dispatch).toBeCalledWith(deleteTask(1));
    });
  });
});
