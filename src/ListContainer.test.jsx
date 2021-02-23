import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  const renderListContainer = () => render(<ListContainer />);

  const dispatch = jest.fn();

  const tasks = [
    { id: 1, title: '와 너무 재밌다!' },
    { id: 2, title: '와 너무 즐겁다!' },
    { id: 3, title: '와 너무 신난다!' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({ tasks }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders tasks', () => {
    const { getByText } = renderListContainer();

    tasks.forEach(({ title }) => {
      expect(getByText(title)).not.toBeNull();
    });
  });

  it('removes the task from tasks upon clicking 완료 button along the task', () => {
    const { getAllByText } = renderListContainer();

    const completeButton = getAllByText(/완료/);

    completeButton.forEach((button) => {
      fireEvent.click(button);
    });

    tasks.forEach(({ id }) => {
      expect(dispatch).toBeCalledWith(deleteTask(id));
    });
  });
});
