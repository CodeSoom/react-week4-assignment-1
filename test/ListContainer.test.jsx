import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import ListContainer from '../src/ListContainer';
import { deleteTask } from '../src/store/actions';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  const renderComponent = () => render(<ListContainer />);

  useSelector.mockImplementation((selector) => selector({
    tasks: [{ id: 1, title: 'task1' }, { id: 2, title: 'task2' }],
  }));
  useDispatch.mockImplementation(() => dispatch);

  it('렌더링 된다.', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });

  it('task 삭제시, deleteTask 액션이 dispatch 된다.', () => {
    const { getAllByRole } = renderComponent();

    const buttons = getAllByRole('button', { name: '완료' });

    fireEvent.click(buttons[0]);
    expect(dispatch).toBeCalledWith(deleteTask(1));
  });
});
