import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

import tasks from '../__fixture__/data';

import { changeTitle, addTask, deleteTask } from './action';

jest.mock('react-redux');

const initState = {
  taskTitle: '',
  tasks: [],
};

function mockUseSelector(state = initState) {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));
}

const dispatch = jest.fn();

function renderApp() {
  return render(<App />);
}

describe('<App />', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  context('When a user first launches the to-do app', () => {
    mockUseSelector();

    it('shows "To-do" ', () => {
      mockUseSelector();

      const { container } = renderApp();

      expect(container).toHaveTextContent('To-do');
    });

    it('shows "할 일"', () => {
      mockUseSelector();

      const { container } = renderApp();

      expect(container).toHaveTextContent('할 일');
    });

    it('shows "추가"', () => {
      mockUseSelector();

      const { container } = renderApp();

      expect(container).toHaveTextContent('추가');
    });

    it('shows "할 일이 없어요!"', () => {
      mockUseSelector();

      const { container } = renderApp();

      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });

  context('When a user enters a task called "바뀐다"', () => {
    it('shows "바뀐다" in the input', () => {
      mockUseSelector({
        tasks: [],
      });

      const { getByLabelText } = renderApp();

      fireEvent.change(getByLabelText(/할 일/i), {
        target: {
          value: '바뀐다',
        },
      });

      expect(getByLabelText(/할 일/i).value).toBe('바뀐다');

      expect(dispatch).toHaveBeenCalledWith(changeTitle('바뀐다'));

      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });

  context('when a user add a task called "할 일4"', () => {
    it('clear task title', () => {
      mockUseSelector({
        ...initState,
        taskTitle: '할 일4',
        tasks,
      });

      const { getByLabelText, getByText, getByPlaceholderText } = renderApp();

      const inputTodo = getByLabelText(/할 일/i);

      fireEvent.change(inputTodo, { target: { value: '할 일4' } });

      fireEvent.click(getByText(/추가/i));

      expect(getByPlaceholderText(/할 일을 입력해 주세요/i)).toBeInTheDocument();
    });

    it('occurs a addTask action', () => {
      mockUseSelector({
        ...initState,
        taskTitle: '할 일4',
        tasks,
      });

      const { getByLabelText, getByText } = renderApp();

      const inputTodo = getByLabelText(/할 일/i);

      fireEvent.change(inputTodo, { target: { value: '할 일4' } });

      fireEvent.click(getByText(/추가/i));

      expect(dispatch).toHaveBeenCalledWith(addTask());

      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });

  context(
    'when a user click the "완료" button for a task called "할 일2"',
    () => {
      it('occurs a deleteTask action', () => {
        mockUseSelector({
          ...initState,
          taskTitle: '',
          tasks,
        });

        const { getByText } = renderApp();

        fireEvent.click(getByText(/할 일2/i).lastChild);

        expect(dispatch).toHaveBeenCalledWith(deleteTask(2));

        expect(dispatch).toHaveBeenCalledTimes(1);
      });
    },
  );
});
