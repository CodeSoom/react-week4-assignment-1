import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import {
  deleteTask,
} from './actions';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('tasks가 없을 경우', () => {
    it('초기화면 로딩', () => {
      const tasks = [];

      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const { container } = render((
        <ListContainer />
      ));

      expect(container).toHaveTextContent(/할 일이 없어요/);
    });
  });

  context('tasks가 있을 경우', () => {
    it('할일 목록을 보여준다.', () => {
      const tasks = [
        { id: 1, title: 'do nothing 1' },
        { id: 2, title: 'do nothing 2' },
      ];

      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const { container } = render((
        <ListContainer />
      ));

      expect(container).toHaveTextContent(/do nothing/);
    });

    context('완료 버튼을 누를 경우', () => {
      it('deleteTask가 dispatch 된다.', () => {
        const tasks = [
          { id: 1, title: 'do nothing 1' },
          { id: 2, title: 'do nothing 2' },
        ];

        useSelector.mockImplementation((selector) => selector({
          tasks,
        }));

        const dispatch = jest.fn();

        useDispatch.mockImplementation(() => dispatch);

        const { getAllByText } = render((
          <ListContainer />
        ));

        fireEvent.click(getAllByText(/완료/)[1]);

        expect(dispatch).toBeCalledWith(deleteTask(2));
      });
    });
  });
});
