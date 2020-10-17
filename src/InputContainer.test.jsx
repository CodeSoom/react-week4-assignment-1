import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';
import { addTask, updateTaskTitle } from './actions';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  useDispatch.mockImplementation(() => dispatch);
});

function renderInputContainer() {
  return render((
    <InputContainer />
  ));
}

describe('InputContainer', () => {
  const { taskTitle } = useSelector.mockImplementation((selector) => selector({
    taskTitle,
  }));

  describe('change taskTitle', () => {
    it('dispatches updateTaskTitle action', () => {
      const newTaskTitle = 'next task';

      const { getByLabelText } = renderInputContainer();

      expect(getByLabelText('할 일')).not.toBeNull();

      fireEvent.change(getByLabelText('할 일'), { target: { value: newTaskTitle } });

      expect(dispatch).toBeCalledWith(updateTaskTitle(newTaskTitle));
    });
  });

  describe('click add task button', () => {
    it('dispatches addTask action', () => {
      const { getByText } = renderInputContainer();

      expect(getByText(/추가/)).not.toBeNull();

      fireEvent.click(getByText(/추가/));

      expect(dispatch).toBeCalledWith(addTask());
    });
  });
});
