import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

const renderApp = () => {
  const { getByText, getByPlaceholderText } = render(
    <App />,
  );

  return {
    getByText,
    getByPlaceholderText,
  };
};

describe('App', () => {
  test('handleChangeTitle', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
      tasks: [],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByPlaceholderText } = renderApp();

    fireEvent.change(
      getByPlaceholderText('할 일을 입력해 주세요'),
      { target: { value: 'Handle Change Title' } },
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: 'Handle Change Title',
      },
    });
  });

  test('handleClickAddTask', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      tasks: [],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = renderApp();

    fireEvent.click(getByText('추가'));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });

  test('handleClickDeleteTask', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      tasks: [
        {
          id: 1,
          title: 'Handle Click Delete Task',
        },
      ],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = renderApp();

    fireEvent.click(getByText('완료'));

    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: { id: 1 },
    });
  });
});
