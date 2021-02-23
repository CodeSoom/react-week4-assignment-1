import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';
import { DELETE_TASK } from './actions';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('should render tasks', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks: [{ id: 1, title: '할일1' }],
    }));

    const { queryByText } = render((
      <ListContainer />
    ));

    expect(queryByText('할일1')).toBeInTheDocument();
  });

  it('should delete task when click button', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementationOnce(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      tasks: [{ id: 1, title: '할일1' }],
    }));

    const { queryByText } = render((
      <ListContainer />
    ));

    fireEvent.click(queryByText('완료'));

    expect(dispatch).toHaveBeenCalledWith({ type: DELETE_TASK, payload: 1 });
  });
});
