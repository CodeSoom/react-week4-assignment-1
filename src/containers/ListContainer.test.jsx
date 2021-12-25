import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();
  const renderListContainer = () => render((
    <ListContainer />
  ));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: 'Task-1' },
        { id: 2, title: 'Task-2' },
      ],
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  it('with tasks, titles should be rendered', () => {
    const { getByText } = renderListContainer();

    expect(getByText(/Task-1/)).not.toBeNull();
    expect(getByText(/Task-2/)).not.toBeNull();
  });

  it('if "완료" button is clicked, "deleteTask" action is dispatched', () => {
    const { getAllByText } = renderListContainer();

    fireEvent.click(getAllByText(/완료/)[0]);

    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: {
        id: 1,
      },
    });
  });
});
