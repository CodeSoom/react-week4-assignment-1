import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  given('tasktitle', () => ({ taskTitle: given.taskTitle }));

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskTitle: given.taskTitle,
    }));
  });

  describe('handleClick', () => {
    it('works when clicked', () => {
      given('taskTitle', () => 'New Title');

      const { queryByText, queryByDisplayValue } = render((<InputContainer />));

      expect(queryByText(/추가/)).not.toBeNull();
      expect(queryByDisplayValue(/New Title/)).not.toBeNull();

      fireEvent.click(queryByText(/추가/));

      expect(dispatch).toBeCalledWith({ type: 'addTask' });
    });
  });

  describe('handleChangeTitle', () => {
    it('works when input filled', () => {
      given('tasksTitle', () => '');

      const { queryByLabelText } = render((<InputContainer />));

      expect(queryByLabelText(/할 일/).value).toEqual('');

      fireEvent.change(queryByLabelText(/할 일/), {
        target: { value: '변했어요' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateTaskTitle',
        payload: { taskTitle: '변했어요' },
      });
    });
  });
});
