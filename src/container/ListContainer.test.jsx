import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders list', () => {
    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
  });

  it('dispatches deleteTask action', () => {
    const { getAllByText } = render((
      <ListContainer />
    ));

    fireEvent.click(getAllByText('완료')[0]);

    expect(dispatch).toBeCalledWith({
      payload: {
        id: 1,
      },
      type: 'deleteTask',
    });
  });
});
