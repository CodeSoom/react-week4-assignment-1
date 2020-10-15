import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('<ListContainer />', () => {
  const dispatch = jest.fn();
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ],
  }));
  useDispatch.mockImplementation(() => dispatch);

  const renderListContainer = () => render((
    <ListContainer />
  ));

  describe('render', () => {
    it('task list', () => {
      // When
      const { getByRole } = renderListContainer();

      // Then
      expect(getByRole('list')).toHaveTextContent('Task-1');
    });

    it('complete button', () => {
      // When
      const { getAllByText } = renderListContainer();

      // Then
      expect(getAllByText('완료')[0]).toBeInTheDocument();
    });
  });

  describe('event', () => {
    it('calls dispatch on click complete button', () => {
      // Given
      const { getAllByRole } = renderListContainer();

      // When
      fireEvent.click(getAllByRole('button')[0]);

      // Then
      expect(dispatch).toBeCalled();
    });
  });
});
