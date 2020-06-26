import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('without any tasks', () => {
    it("doesn't anything", () => {
      const emptyTasks = [];

      useSelector.mockImplementation((selector) => selector({
        tasks: emptyTasks,
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText('할 일이 없어요!')).not.toBeNull();
    });
  });

  context('with tasks', () => {
    const testTasks = [
      { id: 1, title: 'Distribute new version' },
      { id: 2, title: 'Fix errors' },
    ];

    it('select tasks to List component', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: testTasks,
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText(testTasks[0].title)).not.toBeNull();
    });

    it('dispatch id of task to be deleted', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        tasks: testTasks,
      }));

      const { getAllByText } = render((
        <ListContainer />
      ));

      fireEvent.click(getAllByText(/완료/)[0]);

      expect(dispatch).toBeCalledWith({
        type: 'deleteTask',
        payload: {
          id: 1,
        },
      });
    });
  });
});
