import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

import { tasks } from '../fixtures/tasks';
import { deleteTask } from './action';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  it('Click The "완료" button, calls deleteTask with clicked task id', () => {
    const { getAllByRole } = render(
      <ListContainer />,
    );
    const buttons = getAllByRole('button', { name: /완료/ });

    fireEvent.click(buttons[1]);

    expect(dispatch).toBeCalledWith(deleteTask(tasks[1].id));
  });
});
