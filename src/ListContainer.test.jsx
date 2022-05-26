import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';
import { tasks } from '../__mocks__/tasks';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  it('to do를 삭제', () => {
    const { getAllByRole } = render((
      <ListContainer />
    ));
    const buttons = getAllByRole('button', { name: /완료/ });

    fireEvent.click(buttons[1]);
    expect(dispatch).toBeCalledWith(deleteTask(tasks[1].id));
  });
});
