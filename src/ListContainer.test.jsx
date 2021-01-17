import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import { deleteTask } from './actions';

jest.mock('react-redux');

describe('ListContainer', () => {
  const tasks = [
    { id: 1, title: '아무것도 하지않기 #1' },
    { id: 2, title: '아무것도 하지않기 #2' },
  ];

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('show tasks', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));

    const { getByText } = render(<ListContainer />);

    expect(getByText(/아무것도 하지않기 #1/)).not.toBeNull();
    expect(getByText(/아무것도 하지않기 #2/)).not.toBeNull();
  });

  it('delete all', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));

    const { getAllByText } = render(<ListContainer />);

    expect(getAllByText(/완료/)).not.toBeNull();

    const buttons = getAllByText(/완료/);
    buttons.forEach((button, index) => {
      fireEvent.click(button);

      expect(dispatch).toBeCalledWith(deleteTask(tasks[index].id));
    });
  });
});
