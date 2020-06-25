import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('Input', () => {
  const dispatch = jest.fn();
  const value = '과제과제';

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    taskTitle: value,
  }));

  context('with value', () => {
    it('renders value', () => {
      const { getByText, getByDisplayValue } = render(
        <InputContainer />,
      );

      expect(getByText(/할 일/)).not.toBeNull();
      expect(getByDisplayValue(value)).not.toBeNull();
    });
  });

  context('when value is changed', () => {
    it('occurs onChange', () => {
      const { getByLabelText } = render(
        <InputContainer />,
      );

      const input = getByLabelText('할 일');
      const newValue = '과제과제과제';

      fireEvent.change(input, {
        target: { value: newValue },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeTitle',
        payload: { taskTitle: newValue },
      });
    });
  });

  context('when add button is clicked', () => {
    it('occurs onClick', () => {
      const { getByText } = render(
        <InputContainer />,
      );

      fireEvent.click(getByText(/추가/));

      expect(dispatch).toBeCalledWith({
        type: 'addTask',
      });
    });
  });
});
