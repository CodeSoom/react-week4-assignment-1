import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

import {
  addTask, updateTaskTitle,
} from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  function renderInputContainer(taskTitle = '') {
    const { getByText, getByDisplayValue, getByPlaceholderText } = render(<InputContainer />);
    return {
      addButton: getByText(/추가/),
      taskTitle: getByDisplayValue(taskTitle),
      input: getByPlaceholderText(/할 일을 입력해 주세요/),
    };
  }

  context('updateTaskTitle', () => {
    it('새로운 상태로 변경시킨다.', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
      }));

      const { input } = renderInputContainer();
      fireEvent.change(
        input,
        {
          target: {
            value: 'New Task',
          },
        },
      );

      expect(dispatch).toBeCalledWith(updateTaskTitle(
        'New Task',
      ));
    });
  });

  context('addTask', () => {
    it('할 일을 추가한다', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: 'New Task',
      }));

      const { addButton, taskTitle } = renderInputContainer('New Task');

      expect(addButton).not.toBeNull();
      expect(taskTitle).not.toBeNull();

      fireEvent.click(addButton);
      expect(dispatch).toBeCalledWith(addTask());
    });
  });
});
