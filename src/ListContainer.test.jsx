import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'Task1' },
    ],
  }));

  it('deletes a task with calling "deleteTask"', () => {
    const { getByRole } = render((
      <ListContainer />
    ));

    expect(getByRole('button', { name: '완료' })).not.toBeNull();

    fireEvent.click(getByRole('button', { name: '완료' }));

    expect(dispatch).toBeCalledWith(deleteTask(1));
  });
});
