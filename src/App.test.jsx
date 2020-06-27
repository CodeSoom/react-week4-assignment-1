import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

const renderApp = () => {
  const { container, getByPlaceholderText, getByText } = render(
    <App />,
  );

  return {
    container,
    getByPlaceholderText,
    getByText,
  };
};

describe('App', () => {
  test('handleClickAddTask', () => {
    const todo = 'Handle Click Add Task!';
    const { container, getByPlaceholderText, getByText } = renderApp();
    const input = getByPlaceholderText('할 일을 입력해 주세요');
    const button = getByText('추가');

    fireEvent.change(input, { target: { value: todo } });

    expect(input).toHaveAttribute('value', todo);

    fireEvent.click(button);

    expect(input).toHaveAttribute('value', '');
    expect(container).toHaveTextContent(todo);
  });

  test('handleClickDeleteTask', () => {
    const todo = 'Handle Click Delete Task';
    const { container, getByPlaceholderText, getByText } = renderApp();
    const input = getByPlaceholderText('할 일을 입력해 주세요');
    const addButton = getByText('추가');

    fireEvent.change(input, { target: { value: todo } });
    fireEvent.click(addButton);

    const completeButton = getByText('완료');

    expect(container).toHaveTextContent(todo);

    fireEvent.click(completeButton);

    expect(container).toHaveTextContent('할 일이 없어요!');
  });
});
