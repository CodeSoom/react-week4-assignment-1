import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('<InputContainer />', () => {
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
});
