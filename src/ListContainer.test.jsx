import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const tasks = [
    { id: 1, title: '첫 번째 할 일' },
    { id: 2, title: '두 번째 할 일' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  context('when click 완료', () => {
    it('call handleClickDeleteTask function', () => {
      // When
      const { getByText } = render((
        <ListContainer />
      ));

      fireEvent.click(getByText('완료'));

      // Then
      expect(dispatch).toBeCalled();
    });
  });
});
