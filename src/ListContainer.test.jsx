import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
    ],
  }));

  it('delete task', () => {
    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();

    fireEvent.click(getByText(/완료/));

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: { id: 1 },
    });
  });
});
