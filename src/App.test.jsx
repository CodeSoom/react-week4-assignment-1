import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { deleteTask, updateTaskTitle, addTask } from './actions';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  context('when there are tasks', () => {
    it('should display tasks', () => {
      const tasks = [
        { id: 1, title: '아무 것도 하지 않기 #1' },
        { id: 2, title: '아무 것도 하지 않기 #2' },
      ];

      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const { getByText } = render((
        <App />
      ));

      expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
      expect(getByText(/아무 것도 하지 않기 #2/)).not.toBeNull();
    });
  });

  context('when there is no task', () => {
    it('should display default message', () => {
      const tasks = [];

      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const { getByText } = render((
        <App />
      ));

      expect(getByText(/할 일이 없어요!/)).not.toBeNull();
    });
  });

  context('when click for new task', () => {
    it('calls add action', () => {
      const tasks = [];

      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      const { getByText, getByLabelText } = render((
        <App />
      ));

      expect(getByText(/할 일이 없어요!/)).not.toBeNull();

      fireEvent.change(getByLabelText('할 일'), {
        target: { value: '무언가 하기' },
      });

      expect(dispatch).toBeCalledWith(updateTaskTitle('무언가 하기'));

      fireEvent.click(getByText(/추가/));
      expect(dispatch).toBeCalledWith(addTask());
    });
  });

  context('when there is no task', () => {
    it('should display default message', () => {
      const tasks = [];

      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const { getByText } = render((
        <App />
      ));

      expect(getByText(/할 일이 없어요!/)).not.toBeNull();
    });
  });

  context('when type new title', () => {
    it('should update task title', () => {
      const tasks = [];

      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      const { getByText, getByLabelText } = render((
        <App />
      ));

      expect(getByText(/할 일이 없어요!/)).not.toBeNull();

      fireEvent.change(getByLabelText('할 일'), {
        target: { value: '무언가 하기' },
      });

      expect(dispatch).toBeCalledWith(updateTaskTitle('무언가 하기'));
    });
  });

  context('when click complete', () => {
    it('should remove task', () => {
      const tasks = [
        { id: 1, title: '아무 것도 하지 않기 #1' },
      ];

      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      const { getByText } = render((
        <App />
      ));

      expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();

      fireEvent.click(getByText(/완료/));

      expect(dispatch).toBeCalledWith(deleteTask(1));
    });
  });
});
