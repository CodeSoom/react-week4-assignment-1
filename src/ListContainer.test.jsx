import {
  fireEvent, render, screen,
} from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '할 일 #1' },
      { id: 2, title: '할 일 #2' },
    ],
  }));

  render(<ListContainer />);

  it('할 일 목록이 화면에 노출된다.', () => {
    expect(screen.getByText('할 일 #1')).toBeInTheDocument();
    expect(screen.getByText('할 일 #2')).toBeInTheDocument();
    expect(screen.queryByText('할 일 #3')).not.toBeInTheDocument();
  });

  it('삭제하면 해당 id를 가진 할 일이 사라진다.', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: '할 일 #1' },
      ],
    }));

    render(<ListContainer />);

    fireEvent.click(screen.getByRole('button', { name: '완료' }));

    expect(dispatch).toBeCalledWith({ type: 'deleteTask', payload: { id: 1 } });
  });
});
