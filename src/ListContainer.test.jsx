import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('list tasks', () => {
    const tasks = [
      { id: 1, title: '아무것도 하지 않기 1' },
      { id: 2, title: '아무것도 하지 않기 2' },
    ];

    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));
    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/아무것도 하지 않기 1/)).not.toBeNull();
  });

  it('deletes a task', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: '아무것도 하지 않기 1' },
      ],
    }));

    const { getByText } = render((
      <ListContainer />
    ));

    fireEvent.click(getByText(/완료/));

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: { id: 1 },
    });
  });
});
