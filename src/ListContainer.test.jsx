import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무것도 하지 않기 #1' },
    ],
  }));

  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it('render test', () => {
    const { getByText } = render(<ListContainer />);

    expect(getByText(/아무것도 하지 않기 #1/)).not.toBeNull();
  });

  it('remove Task test', () => {
    useDispatch.mockImplementation(() => dispatch);
    const { getByText } = render(<ListContainer />);

    fireEvent.click(getByText(/완료/));
    expect(dispatch).toBeCalledWith(deleteTask(1));
  });
});
