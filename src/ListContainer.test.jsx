import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  const renderListContainer = () => render(<ListContainer />);

  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: '와 너무 재밌다!' },
      ],
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders tasks', () => {
    const { getByText } = renderListContainer();

    expect(getByText(/와 너무 재밌다!/)).not.toBeNull();
  });

  it('removes the task from tasks upon clicking 완료 button along the task', () => {
    const { getByText } = renderListContainer();

    fireEvent.click(getByText(/완료/));

    expect(dispatch).toBeCalledWith(deleteTask(1));
  });
});
