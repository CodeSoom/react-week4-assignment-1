import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import {
  deleteTask,
} from './actions';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('할 일이 있으면', () => {
    const tasks = [
      { id: 1, title: 'New Task #1' },
      { id: 2, title: 'New Task #2' },
    ];

    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));

    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    it('할 일 목록을 보여준다.', () => {
      const { getByText } = render(<ListContainer />);

      tasks.forEach(({ title }) => {
        expect(getByText(title)).not.toBeNull();
      });
    });

    it('할 일 목록을 삭제한다', () => {
      const { getAllByText } = render(<ListContainer />);
      const removeButtons = getAllByText(/완료/);

      tasks.forEach(({ id }, index) => {
        fireEvent.click(removeButtons[index]);
        expect(dispatch).toBeCalledWith(deleteTask(id));
      });
    });
  });

  context('할 일이 없으면', () => {
    it('빈 메세지를 출력한다.', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [],
      }));

      const { getByText } = render(<ListContainer />);

      expect(getByText(/할 일이 없어요!/)).not.toBeNull();
    });
  });
});
