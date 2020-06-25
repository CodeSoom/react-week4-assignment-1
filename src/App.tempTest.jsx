import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

import tasks from '../__fixture__/data';

function renderApp() {
  return render(<App />);
}

describe('<tempApp />', () => {
  context('When a user first launches the to-do app', () => {
    it('shows "To-do" ', () => {
      const { container } = renderApp();
      expect(container).toHaveTextContent('To-do');
    });

    it('shows "할 일"', () => {
      const { container } = renderApp();
      expect(container).toHaveTextContent('할 일');
    });

    it('shows "추가"', () => {
      const { container } = renderApp();
      expect(container).toHaveTextContent('추가');
    });

    it('shows "할 일이 없어요!"', () => {
      const { container } = renderApp();
      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });

  context('When a user enters a task called "바뀐다"', () => {
    it('shows "바뀐다" in the input', () => {
      const { getByLabelText } = renderApp();

      fireEvent.change(getByLabelText('할 일'), {
        target: {
          value: '바뀐다',
        },
      });

      expect(getByLabelText('할 일').value).toBe('바뀐다');
    });
  });

  context('when a user add a task called "할 일4"', () => {
    it('appends a new task into tasks', () => {
      const {
        container,
        getByLabelText,
        getByText,
        getByPlaceholderText,
      } = renderApp();

      const inputTodo = getByLabelText('할 일');

      tasks.forEach((task) => {
        fireEvent.change(inputTodo, { target: { value: task.title } });

        fireEvent.click(getByText('추가'));
      });

      fireEvent.change(inputTodo, { target: { value: '할 일4' } });

      fireEvent.click(getByText('추가'));

      expect(getByPlaceholderText('할 일을 입력해 주세요')).toBeInTheDocument();

      expect(container).toHaveTextContent('할 일4');

      expect(container).toHaveTextContent('완료');
    });
  });

  context(
    'when a user click the "완료" button for a task called "할 일2"',
    () => {
      it('does not show "할 일2"', () => {
        const { container, getByLabelText, getByText } = renderApp();

        const inputTodo = getByLabelText('할 일');

        tasks.forEach((task) => {
          fireEvent.change(inputTodo, { target: { value: task.title } });

          fireEvent.click(getByText('추가'));
        });

        fireEvent.click(getByText('할 일2').lastChild);

        expect(container).not.toHaveTextContent('할 일2');
      });
    },
  );
});
