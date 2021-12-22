import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const tasks = [
    { id: 1, title: '하하하' },
  ];

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  it('deleteTask action이 호출된다', () => {
    const { getByText } = render(<ListContainer />);
    const deleteButton = getByText(/완료/);

    fireEvent.click(deleteButton);

    expect(dispatch).toBeCalledWith({ type: 'deleteTask', payload: { id: 1 } });
  });
});
