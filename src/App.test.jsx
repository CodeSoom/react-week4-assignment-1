import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

import tasks from '../__fixture__/data';

import { changeTitle, addTask, deleteTask } from './action';

jest.mock('react-redux');

function renderApp() {
  return render(<App />);
}

describe('<App />', () => {
  context('When a user first launches the to-do app', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
      tasks: [],
    }));

    it('shows "To-do" ', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
        tasks: [],
      }));

      const { container } = renderApp();
      expect(container).toHaveTextContent('To-do');
    });

    it('shows "할 일"', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
        tasks: [],
      }));
      const { container } = renderApp();
      expect(container).toHaveTextContent('할 일');
    });

    it('shows "추가"', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
        tasks: [],
      }));
      const { container } = renderApp();
      expect(container).toHaveTextContent('추가');
    });

    it('shows "할 일이 없어요!"', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
        tasks: [],
      }));
      const { container } = renderApp();
      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });

  context('When a user enters a task called "바뀐다"', () => {
    it('shows "바뀐다" in the input', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [],
      }));

      const changeTitleDispatch = jest.fn();
      useDispatch.mockImplementation(() => changeTitleDispatch);

      const { getByLabelText } = renderApp();

      fireEvent.change(getByLabelText('할 일'), {
        target: {
          value: '바뀐다',
        },
      });

      expect(getByLabelText('할 일').value).toBe('바뀐다');

      expect(changeTitleDispatch).toHaveBeenCalledWith(changeTitle('바뀐다'));
      expect(changeTitleDispatch).toHaveBeenCalledTimes(1);
    });
  });

  context('when a user add a task called "할 일4"', () => {
    it('clear task title', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '할 일4',
        tasks,
      }));

      const addTaskDispatch = jest.fn();
      useDispatch.mockImplementation(() => addTaskDispatch);

      const { getByLabelText, getByText, getByPlaceholderText } = renderApp();

      const inputTodo = getByLabelText('할 일');

      fireEvent.change(inputTodo, { target: { value: '할 일4' } });

      fireEvent.click(getByText('추가'));

      expect(getByPlaceholderText('할 일을 입력해 주세요')).toBeInTheDocument();
    });

    it('occurs a addTask action', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '할 일4',
        tasks,
      }));

      const addTaskDispatch = jest.fn();
      useDispatch.mockImplementation(() => addTaskDispatch);

      const { getByLabelText, getByText } = renderApp();

      const inputTodo = getByLabelText('할 일');

      fireEvent.change(inputTodo, { target: { value: '할 일4' } });

      fireEvent.click(getByText('추가'));

      expect(addTaskDispatch).toHaveBeenCalledWith(addTask());
      expect(addTaskDispatch).toHaveBeenCalledTimes(1);
    });
  });

  context(
    'when a user click the "완료" button for a task called "할 일2"',
    () => {
      it('occurs a deleteTask action', () => {
        useSelector.mockImplementation((selector) => selector({
          taskTitle: '',
          tasks,
        }));

        const deleteTaskDispatch = jest.fn();
        useDispatch.mockImplementation(() => deleteTaskDispatch);

        const { getByText } = renderApp();

        fireEvent.click(getByText('할 일2').lastChild);

        expect(deleteTaskDispatch).toHaveBeenCalledWith(deleteTask(2));
        expect(deleteTaskDispatch).toHaveBeenCalledTimes(1);
      });
    },
  );
});
