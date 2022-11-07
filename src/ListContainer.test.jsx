import { render, screen, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

import tasks from '../fixtures/tasks';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const renderListContainer = () => render((
    <ListContainer />
  ));

  it('할일을 랜더링한다', () => {
    renderListContainer();

    expect(screen.getByText(/아무것도 하지 않기 #1/)).not.toBeNull();
  });

  it('완료를 누르면 deleteTask가 호출된다', () => {
    renderListContainer();

    expect(screen.getAllByText(/완료/)).not.toBeNull();
    expect(screen.getByText(/아무것도 하지 않기 #1/)).not.toBeNull();

    fireEvent.click(screen.getAllByText(/완료/)[0]);

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: { id: 1 },
    });
  });
});
