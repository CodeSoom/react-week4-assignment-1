import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  function renderInputContainer() {
    return render((
      <InputContainer />
    ));
  }

  it('renders taskTitle', () => {
    const { getByDisplayValue } = renderInputContainer();

    expect(getByDisplayValue(/New Title/)).not.toBeNull();
  });

  it('renders “추가” button to add task', () => {
    const { getByText } = renderInputContainer();

    expect(getByText(/추가/)).not.toBeNull();
  });

  describe('handleChangeTitle', () => {
    it('dispatchs updateTaskTitle action', () => {
      const { getByLabelText } = renderInputContainer();

      fireEvent.change(getByLabelText('할 일'), {
        target: { value: '무언가 하기' },
      });

      expect(dispatch).toBeCalledWith(
        {
          type: 'updateTaskTitle',
          payload: { taskTitle: '무언가 하기' },
        },
      );
    });
  });

  describe('handleClickAddTask', () => {
    it('dispatchs addTask action', () => {
      const { getByText } = renderInputContainer();

      fireEvent.click(getByText(/추가/));

      expect(dispatch).toBeCalledWith({ type: 'addTask' });
    });
  });
});
