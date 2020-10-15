import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('<InputContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
  }));

  const renderInputContainer = () => render((
    <InputContainer />
  ));

  describe('render', () => {
    it('input', () => {
      // When
      const { getByRole } = renderInputContainer();

      // Then
      expect(getByRole('textbox')).toBeInTheDocument();
    });

    it('add button', () => {
      // When
      const { getByText } = renderInputContainer();

      // Then
      expect(getByText('추가')).toBeInTheDocument();
    });
  });

  describe('event', () => {
    it('calls dispatch on typing in the input', () => {
      // Given
      const { getByRole } = renderInputContainer();

      // When
      fireEvent.change(getByRole('textbox'), {
        target: { value: '글자입력' },
      });

      // Then
      expect(dispatch).toBeCalled();
    });

    it('calls dispatch on click the add button', () => {
      // Given
      const { getByText } = renderInputContainer();

      // When
      fireEvent.click(getByText('추가'));

      // Then
      expect(dispatch).toBeCalled();
    });
  });
});
