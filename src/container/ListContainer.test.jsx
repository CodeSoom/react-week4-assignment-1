import { fireEvent, render, within } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';
import { deleteTask } from '../redux/actions';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('deletes task from tasks with 완료 button', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector(
      {
        taskTitle: '',
        tasks: [{ id: 1, title: 'codesoom' }],
      },
    ));

    const { getByText } = render(<ListContainer />);

    fireEvent.click(
      within(getByText('codesoom'))
        .getByRole('button', { name: '완료' }),
    );

    expect(dispatch).toBeCalledWith(deleteTask(1));
  });
});
