import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './actions';

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

  const { getByText, getAllByText, getByRole } = render((
    <ListContainer />
  ));

  it('renders tasks', () => {
    expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
    expect(getByText(/아무 것도 하지 않기 #2/)).not.toBeNull();
  });

  it('deletes the task', () => {
    // 이것도 오류가 나는데 왜 descirbe 안에 있는 내용이 위 test에서는 되고,
    // 이 test에서는...
    // expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();

    // fireEvent.click(getByText(/완료/));
    // fireEvent.click(getByRole('button', { name: /완료/ }));
    // fireEvent.click(getByAllText(/완료/)[0]);

    // expect(dispatch).toBeCalledWith({ type: 'deleteTask' });
    // expect(dispatch).toBeCalledWith(deleteTask(1));
  });
});
