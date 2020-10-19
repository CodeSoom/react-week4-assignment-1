import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title #1',
  }));

  context('changes taskTitle', () => {
    it('dispatches updateTaskTitle', () => {
      const { getByLabelText, getByDisplayValue } = render((
        <InputContainer />
      ));

      expect(getByDisplayValue(/New Title #1/)).not.toBeNull();

      fireEvent.change(getByLabelText('할 일'), {
        target: { value: 'New Title #2' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'New Title #2',
        },
      });
    });
  });

  context('click add button', () => {
    it('dispatches addTask action', () => {
      const { getByText, getByDisplayValue } = render((
        <InputContainer />
      ));

      expect(getByText(/추가/)).not.toBeNull();
      expect(getByDisplayValue(/New Title/)).not.toBeNull();

      fireEvent.click(getByText(/추가/));

      expect(dispatch).toBeCalledWith({ type: 'addTask' });
    });
  });
});
