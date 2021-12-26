import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import ListContainer from './ListContainer';
import { deleteTask } from './actions';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('todo를 삭제한다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { title: 'new title', id: 1 },
      ],
    }));

    const { getByText } = render(<ListContainer />);
    expect(getByText('new title')).not.toBeNull();

    fireEvent.click(getByText(/완료/));
    expect(dispatch).toBeCalledWith(deleteTask(1));
  });
});
