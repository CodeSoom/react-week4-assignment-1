import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const tasks = [{
    id: 1,
    title: '첫 번째 할 일',
  }];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  context('when start application', () => {
    it('first display', () => {
      // When
      const { container } = render(
        (
          <App />
        ),
      );

      // Then
      expect(container).toHaveTextContent('To-do');
      expect(container).toHaveTextContent('할 일');
      expect(container).toHaveTextContent('추가');
      expect(container).toHaveTextContent('첫 번째 할 일');
    });
  });

  context('when change text', () => {
    it('call handleChangeTitle function', () => {
      // When
      const { getByLabelText } = render(
        (
          <App />
        ),
      );

      const input = getByLabelText('할 일');
      fireEvent.change(input, { target: { value: '첫 번째 할 일' } });

      // Then
      expect(input.value).toBe('첫 번째 할 일');
    });
  });

  context('when click 추가', () => {
    it('call handleClickAddTask function', () => {
      // When
      const { getByText, getByLabelText } = render(
        (
          <App />
        ),
      );

      fireEvent.change(getByLabelText('할 일'), { target: { value: '첫 번째 할 일' } });
      fireEvent.click(getByText('추가'));

      // Then
      expect(dispatch).toBeCalled();
    });
  });

  context('when click 완료', () => {
    it('call handleClickDeleteTask function', () => {
      // When
      const { getByText } = render(
        (
          <App />
        ),
      );

      fireEvent.click(getByText('완료'));

      // Then
      expect(dispatch).toBeCalled();
    });
  });
});
