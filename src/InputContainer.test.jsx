import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const tasks = [];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  context('when change text', () => {
    it('call handleChangeTitle function', () => {
      // When
      const { getByLabelText } = render((
        <InputContainer />
      ));

      const input = getByLabelText('할 일');
      fireEvent.change(input, { target: { value: '첫 번째 할 일' } });

      // Then
      expect(dispatch).toBeCalled();
    });
  });

  context('when click 추가', () => {
    it('call handleClickAddTask function', () => {
      // When
      const { getByText, getByLabelText } = render((
        <InputContainer />
      ));

      fireEvent.change(getByLabelText('할 일'), { target: { value: '첫 번째 할 일' } });
      fireEvent.click(getByText('추가'));

      // Then
      expect(dispatch).toBeCalled();
    });
  });
});
