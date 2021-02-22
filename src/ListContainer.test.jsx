import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    const tasks = [
      { id: 1, title: 'Task-1' },
    ];

    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders tasks', () => {
    const { getByText } = render(<ListContainer />);

    expect(getByText('Task-1')).not.toBeNull();
  });

  it('listens `완료` button click event', () => {
    const { getByText } = render(<ListContainer />);

    fireEvent.click(getByText('완료'));

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: {
        id: 1,
      },
    });
  });
});
