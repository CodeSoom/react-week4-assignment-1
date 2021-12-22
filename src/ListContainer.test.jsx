import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  it('renders tasks', () => {
    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
  });

  it('listens deleteTask event', () => {
    const { getAllByText } = render((
      <ListContainer />
    ));

    const buttons = getAllByText('완료');

    fireEvent.click(buttons[0]);

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: { id: 1 },
    });
  });
});
