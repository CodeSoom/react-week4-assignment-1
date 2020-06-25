import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

import { changeTitle, addTask } from './action';

jest.mock('react-redux');

const initState = {
  taskTitle: '',
};

function mockUseSelector(state = initState) {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: state.taskTitle,
  }));
}

const dispatch = jest.fn();

function renderInputContainer() {
  return render(<InputContainer />);
}

describe('<InputContainer />', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  context('When the user does nothing', () => {
    it('shows "할 일을 입력해 주세요"', () => {
      mockUseSelector();

      const { getByPlaceholderText } = renderInputContainer();

      expect(
        getByPlaceholderText(/할 일을 입력해 주세요/i),
      ).toBeInTheDocument();
    });

    it('shows a "추가" button', () => {
      const { container } = renderInputContainer();

      expect(container).toHaveTextContent('추가');
    });
  });

  context('When a user enters a task called "바뀐다"', () => {
    it('shows "바뀐다" in the input', () => {
      mockUseSelector({});

      const { getByLabelText } = renderInputContainer();

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
      mockUseSelector({ taskTitle: '할 일4' });

      const { getByLabelText, getByText, getByPlaceholderText } = renderInputContainer();

      const inputTodo = getByLabelText(/할 일/i);

      fireEvent.change(inputTodo, { target: { value: '할 일4' } });

      fireEvent.click(getByText(/추가/i));

      expect(
        getByPlaceholderText(/할 일을 입력해 주세요/i),
      ).toBeInTheDocument();
    });

    it('occurs a addTask action', () => {
      mockUseSelector({ taskTitle: '할 일4' });

      const { getByLabelText, getByText } = renderInputContainer();

      const inputTodo = getByLabelText(/할 일/i);

      fireEvent.change(inputTodo, { target: { value: '할 일4' } });

      fireEvent.click(getByText(/추가/i));

      expect(dispatch).toHaveBeenCalledWith(addTask());

      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
