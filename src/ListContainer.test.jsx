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
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ],
  }));

  function renderListContainer() {
    return render(<ListContainer />);
  }

  it('renders task', () => {
    const { getByText } = renderListContainer();

    expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
  });

  it('renders click "완료" button event', () => {
    const { getAllByText } = renderListContainer();

    fireEvent.click(getAllByText('완료')[0]);

    expect(dispatch).toBeCalled();
  });
});
