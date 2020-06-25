import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();
  const tasks = [
    { id: 1, title: '과제하기' },
    { id: 2, title: '과제하지말기' },
  ];

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ tasks }));

  context('with tasks', () => {
    it('renders tasks', () => {
      const { getByText } = render(
        <ListContainer />,
      );

      tasks.forEach((task) => {
        expect(getByText(task.title)).not.toBeNull();
      });
    });
  });

  context('when delete button is clicked', () => {
    it('occurs onDeleteClick', () => {
      const { getAllByText } = render(
        <ListContainer />,
      );

      getAllByText('완료').forEach(
        (button) => fireEvent.click(button),
      );

      const getAction = (id) => ({
        type: 'deleteTask',
        payload: { id },
      });

      tasks.forEach((task) => {
        expect(dispatch).toBeCalledWith(getAction(task.id));
      });
    });
  });
});
